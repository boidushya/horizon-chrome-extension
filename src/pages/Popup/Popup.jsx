import { Listbox, Transition } from '@headlessui/react';
import {
  CheckCircleIcon,
  CheckIcon,
  SelectorIcon,
} from '@heroicons/react/solid';
import React, { useState } from 'react';
import '../../assets/styles/tailwind.css';
import ReactCodeInput from 'react-code-input';
import { theme } from '../../../tailwind.config.js';

const addresses = [
  { place: 'Manipal University Jaipur, Rajasthan' },
  { place: 'Garia Station Road' },
  { place: 'Karolbagh, New Delhi' },
  { place: 'Tollygunge, Kolkata' },
];

const PinSection = ({ enteredPin, setEnteredPin }) => {
  const props = {
    inputStyle: {
      fontFamily: 'monospace',
      margin: '0.5rem',
      MozAppearance: 'textfield',
      width: '2rem',
      height: '2rem',
      borderRadius: '0.25rem',
      fontSize: '1rem',
      backgroundColor: theme.extend.colors.accent[600],
      color: 'white',
      userSelect: 'none',
      textAlign: 'center',
    },
  };
  return (
    <>
      <div className="grid place-items-center">
        <ReactCodeInput type="password" fields={4} className="" {...props} />
      </div>
    </>
  );
};

const Popup = () => {
  const [selected, setSelected] = useState(addresses[0]);
  const [enteredPin, setEnteredPin] = useState([null, null, null, null]);
  return (
    <div className="h-full w-full px-4 pb-12 bg-accent-900">
      <div className="py-12">
        <h1 className="text-3xl text-white text-center leading-1">Checkout</h1>
        <h3 className="text-xs text-zinc-400 text-center mt-0 font-light">
          powered by <b className="text-zinc-300">Horizon</b>
        </h3>
      </div>
      <div className="mx-auto w-full max-w-md rounded-2xl p-2 space-y-2 pt-0">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-accent-600 px-4 py-2 text-left text-sm font-medium text-zinc-50 hover:bg-accent-700 focus:outline-none focus-visible:ring focus-visible:ring-accent-500 focus-visible:ring-opacity-75">
              <span className="block truncate max-w-[20ch]">
                {selected.place}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <CheckCircleIcon className="ml-2 align-middle h-4 w-4 text-green-300" />
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={React.Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-accent-700 py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {addresses.map((place, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-accent-600 text-zinc-50' : 'text-zinc-300'
                      }`
                    }
                    value={place}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          title={place.place}
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {place.place}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-400">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <PinSection enteredPin={enteredPin} setEnteredPin={setEnteredPin} />
      </div>
    </div>
  );
};

export default Popup;
