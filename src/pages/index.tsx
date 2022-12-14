import DefaultLayout from "@/layouts/DefaultLayout";
import { getAddressByQuery } from "@/server/common/getAddress";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const Home: NextPage = () => {
  const [addressSearch, setAddressSearch] = useState("");
  const [addresses, setAdresses] = useState<any>(null);
  const [expandedSearch, setExpandedSearch] = useState(false);
  const router = useRouter();

  function handleForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (addressSearch.length > 3) {
      getAddressByQuery(addressSearch).then((res) => {
        if (res.length > 0) {
          if (res.length > 1) {
            setAdresses(res.slice(0, 10));
          } else {
            setAdresses([res[0]]);
          }
        } else {
          setAdresses(null);
        }
      });
    }
  }

  return (
    <>
      <Head>
        <title>Kunde portalen</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <div className="mt-14">
          <div className="mx-auto w-full max-w-3xl">
            <div className="mt-24 px-4">
              <h1 className="wrap mx-auto my-4 break-words">
                Søg en adresse for at se en anmeldelse
              </h1>

              <form onSubmit={(e) => handleForm(e)}>
                <div className="flex">
                  <button
                    onClick={() => setExpandedSearch(!expandedSearch)}
                    id="dropdown-button"
                    data-dropdown-toggle="dropdown"
                    className="z-10 hidden flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none sm:inline-flex"
                    type="button"
                  >
                    Udvidet Søgning{" "}
                    <svg
                      aria-hidden="true"
                      className="ml-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="dropdown"
                    className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
                  ></div>
                  <div className="relative w-full">
                    <input
                      value={addressSearch}
                      onChange={(e) => setAddressSearch(e.target.value)}
                      type="search"
                      id="search-dropdown"
                      className="z-20 block w-full rounded-l-lg border border-l-2 border-gray-300 border-l-gray-100 bg-gray-50 p-2.5 text-sm text-gray-900 sm:rounded-l-none"
                      placeholder="Search"
                    />
                    <button
                      type="submit"
                      className="absolute top-0 right-0 rounded-r-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none "
                    >
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
              <div className="flex flex-col">
                <span>{expandedSearch && <>Udvidet søgning</>}</span>
                <span>
                  {addresses
                    ? addresses.map((address: any) => {
                        return (
                          <div
                            key={address.id}
                            className="my-2.5 flex items-center justify-between border border-gray-300"
                          >
                            <span>{address.adressebetegnelse}</span>
                            <Link
                              href={address.id}
                              className="bg-blue-500 p-2.5 text-white"
                            >
                              Gå til anmeldelser
                            </Link>
                          </div>
                        );
                      })
                    : null}
                </span>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Home;
