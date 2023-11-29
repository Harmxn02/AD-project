"use client";

import React from "react";
import Title from "@/components/utility/Title";

import Loading from "@/components/utility/Loading";

import { GetAPI } from "../../assets/js/api";


// TODO: get server people to change timestamps in Transactions (API) endpoint to be in the year 2084


const Transactions = () => {
    const transactions = GetAPI("/transactions");

	if (transactions === null) {
		return <Loading />;
	}


	console.log("TR: ", transactions);



    return (
        <section>
            <Title content="Transactions" />
            <div className="bg-white px-8 pb-6 mb-12 max-h-[335px] overflow-y-auto scrollbar scrollbar-thumb-brandCyan scrollbar-track-transparent shadow-md">
                <table className="w-full">
                    <thead className="sticky top-0 bg-white w-full">
                        <tr className="text-left">
                            <th className="w-[12.5%] h-12 pl-10">
                                Transaction ID
                            </th>
                            <th className="w-[12.5%] h-12">Date</th>
                            <th className="w-[12.5%] h-12">Subscription</th>
                            <th className="w-[12.5%] h-12">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr
                                key={transaction.id}
                                className={`${
                                    transaction.id % 2 === 0
                                        ? "bg-alternatingTransaction"
                                        : "bg-white"
                                }`}
                            >
                                <td className="h-12 text-sm font-bold pl-10">
                                    {transaction.id}
                                </td>
                                <td className="h-12 text-sm">
                                    {new Date(
                                        transaction.date
                                    ).toLocaleDateString()}{" "}
                                </td>
                                <td className="h-12 text-sm">
                                    {transaction.subscription.plan.name}
                                </td>
                                <td className="h-12 text-sm">
                                    {transaction.amount} ADCO
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Transactions;
