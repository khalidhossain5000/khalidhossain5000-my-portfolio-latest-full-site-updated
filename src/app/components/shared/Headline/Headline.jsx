import React from "react";
import { FaAsterisk } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Headline = () => {
  return (
    <div className="headline bg-[#13ff3d] text-black ">
      <div
        style={{ clipPath: "polygon(0% 10%, 95% 0%, 100% 90%, 0% 100%)" }}
        className="overflow-hidden"
      >
        <div className="moving-text flex">
          <Marquee speed="60">
            <div className="flex ">
              <div className=" cntainer text-sm font-bold md:text-4xl md:font-extrabold inter flex items-center gap-3 md:gap-6 p-1 md:p-6 justify-center">
                <h3>Website Development</h3>
                <FaAsterisk />
                <h3>Web Application Development</h3>
                <FaAsterisk />
                <h3>Full Stack Development</h3>
                <FaAsterisk />
                <h3>E-commerce Solutions</h3>
                <FaAsterisk />
                <h3>Frontend Development with React.js</h3>
                <FaAsterisk />
                <h3>Database Management (MongoDB)</h3>
                <FaAsterisk />
                <h3>Bug Fixing & Maintenance</h3>
                <FaAsterisk />
                <h3>Prisma Postgres System Desgin</h3>
                <FaAsterisk />
              </div>

              <div className=" cntainer text-sm font-bold md:text-4xl md:font-extrabold inter flex items-center gap-3 md:gap-6 p-1 md:p-6 justify-center">
                <h3>Website Development</h3>
                <FaAsterisk />
                <h3>Web Application Development</h3>
                <FaAsterisk />
                <h3>MERN Stack Development</h3>
                <FaAsterisk />
                <h3>E-commerce Solutions</h3>
                <FaAsterisk />
                <h3>Frontend Development with React.js</h3>
                <FaAsterisk />
                <h3>Database Management (MongoDB)</h3>
                <FaAsterisk />
                <h3>Bug Fixing & Maintenance</h3>
                <FaAsterisk />
                <h3>Prisma Postgres System Desgin</h3>
                <FaAsterisk />
              </div>

              {/* 3 */}

              <div className=" cntainer  text-sm font-bold md:text-4xl md:font-extrabold inter flex items-center gap-3 md:gap-6 p-1 md:p-6 justify-center">
                <h3 className="text-font-special">Website Development</h3>
                <FaAsterisk />
                <h3 className="text-font-special">
                  Web Application Development
                </h3>
                <FaAsterisk />
                <h3 className="text-font-special">MERN Stack Development</h3>
                <FaAsterisk />
                <h3 className="text-font-special">E-commerce Solutions</h3>
                <FaAsterisk />
                <h3 className="text-font-special">
                  Frontend Development with React.js
                </h3>
                <FaAsterisk />
                <h3 className="text-font-special">
                  Database Management (MongoDB)
                </h3>
                <FaAsterisk />
                <h3 className="text-font-special">Bug Fixing & Maintenance</h3>
                <FaAsterisk />
                <h3 className="text-font-special">
                  Prisma Postgres System Desgin
                </h3>
                <FaAsterisk />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Headline;
