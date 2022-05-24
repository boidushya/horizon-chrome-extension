import React from 'react';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className="OptionsContainer">
      {title} Page
      {/* <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-accent-600 px-4 py-2 text-left text-sm font-medium text-zinc-50 hover:bg-accent-700 focus:outline-none focus-visible:ring focus-visible:ring-accent-500 focus-visible:ring-opacity-75">
                <span>Manipal University Jaipur</span>
                <span className="flex items-center">
                  <CheckCircleIcon className="ml-2 align-middle h-4 w-4 text-green-300" />
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-accent-400`}
                  />
                </span>
              </Disclosure.Button>
              <Transition
                as={React.Fragment}
                enter="transition ease-in duration-100"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-1 translate-y-0"
              >
                <Disclosure.Panel className="p-4 text-sm text-zinc-50 bg-accent-800 rounded-lg font-light">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-accent-600 px-4 py-2 text-left text-sm font-medium text-zinc-50 hover:bg-accent-700 focus:outline-none focus-visible:ring focus-visible:ring-accent-500 focus-visible:ring-opacity-75">
                <span>Ok?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-accent-400`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="p-4 text-sm text-zinc-50 bg-accent-800 rounded-lg font-light">
                no
              </Disclosure.Panel>
            </>
          )}
        </Disclosure> */}
    </div>
  );
};

export default Options;
