import React, { useEffect, useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon, InformationCircleIcon, XIcon as XiconOut } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import { hydrateRoot } from 'react-dom/client';

const alertQueue = [];

function Alert({ type, title, message, onClose }) {
    const ref = useRef();
    const [show, setShow] = useState(true);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const closeTimeout = setTimeout(() => {
            handleClose();
        }, 2000);

        return () => {
            clearTimeout(closeTimeout);
        };
    }, [isClient]);

    const handleClose = () => {
        setShow(false);
    };

    const handleTransitionEnd = () => {
        if (!show) {
            onClose();
        }
    };

    return (
        isClient && (
            <div
                ref={ref}
                aria-live="assertive"
                className="absolute mt-[45px] inset-x-0 top-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
                onTransitionEnd={handleTransitionEnd}
            >
                <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                    <Transition
                        show={show}
                        as={React.Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        {type === 'success' && (
                                            <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                                        )}
                                        {type === 'error' && <XiconOut className="h-6 w-6 text-red-400" aria-hidden="true" />}
                                        {type === 'info' && (
                                            <InformationCircleIcon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                                        )}
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-900">{title}!</p>
                                        <p className="mt-1 text-sm text-gray-500">{message}</p>
                                    </div>
                                    <div className="ml-4 flex-shrink-0 flex">
                                        <button
                                            className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={handleClose}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XIcon className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        )
    );
}

function showAlert(type, title, message) {
    alertQueue.push({ type, title, message });
    if (alertQueue.length === 1) {
        showNextAlert();
    }
}

function showNextAlert() {
    if (alertQueue.length > 0) {
        const alertData = alertQueue[0];
        const onClose = () => {
            alertQueue.shift();
            showNextAlert();
        };
        hydrateRoot(document.getElementById('root'), <Alert {...alertData} onClose={onClose} />);
    }
}

export { showAlert };