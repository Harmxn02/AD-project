import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

const SubscriptionsOverviewCard = ({ name, description, price, period, features }) => {
	SubscriptionsOverviewCard.propTypes = {
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
    period: PropTypes.string.isRequired,
		features: PropTypes.array.isRequired,
	};

  return (
    <div className="bg-white w-full rounded-lg p-6 border border-gray-300">
      <h3 className="text-[1.5rem]">{name}</h3>
      <p className="text-[0.875rem] text-brandBlack">{description}</p>
      <p className="text-[2rem] my-6 font-semibold">
        ADCO {price} <span className="text-[1rem] text-brandBlack font-normal">/month</span>
      </p>
      <Link
        href="/settings/subscriptions"
        className="rounded-full border-2 border-black px-4 py-[0.375rem] inline-block"
      >
        Buy {name} <Image src="/icons/arrow-right.svg" width={20} height={20} className="inline-block"/>
      </Link>
      <div className="w-full bg-gray-200 h-[1px] my-6"></div>
      <ul className="flex flex-col gap-5">
        {features.map((feature) => (
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionsOverviewCard;
