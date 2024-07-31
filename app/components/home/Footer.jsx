import React from "react";
import Image from "next/image";
import { features } from "@/lib/features";
import { resources } from "@/lib/resources";
import Link from "next/link";
import { companys } from "@/lib/companys";
import { socials } from "@/lib/socials";

const Footer = () => {
  return (
    <>
      <div className="border-b my-2.5"></div>
      <footer className="py-8 px-2.5  flex justify-between  gap-12 flex-wrap flex-1 w-full h-full">
        <div className="flex gap-2 flex-col ">
          <div>
            <Image src="/logo.png" width={35} height={35} alt="bumbum" />
            <h3 className="font-bold">BumBum</h3>
          </div>
          <p className="text-slate-700">
            Join tons of people who <br /> organize work and life with BumBum.
          </p>
        </div>

        <div className="features">
          <h3 className="font-semibold">Features</h3>
          {features &&
            features.map((feature, index) => (
              <div
                key={index}
                className="my-2.5 hover:text-indigo-700 transition-all"
              >
                <Link href={`#${feature.name}`}>{feature.name}</Link>
              </div>
            ))}
        </div>

        <div className="resources">
          <h3 className="font-semibold">Resources</h3>
          {resources &&
            resources.map((resource, index) => (
              <div
                key={index}
                className="my-2.5 hover:text-indigo-700 transition-all"
              >
                <Link href={`#${resource.name}`}>{resource.name}</Link>
              </div>
            ))}
        </div>
        <div className="company">
          <h3 className="font-semibold">Our Company</h3>
          {companys &&
            companys.map((company, index) => (
              <div
                key={index}
                className="my-2.5 hover:text-indigo-700 transition-all"
              >
                <Link href={`#${company.name}`}>{company.name}</Link>
              </div>
            ))}
        </div>

        <div className="social">
          <h3 className="font-semibold">We'r active here</h3>

          <div className = " flex justify-center items-center gap-4">
            {socials &&
              socials.map((social, index) => (
                <div
                  key={index}
                  className="my-2.5 hover:text-indigo-700 transition-all "
                >
                  <Link href={`#${social.id}`}>
                    <Image
                      src={social.source}
                      alt="socials"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
