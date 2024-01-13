import { useContext } from "react";
import TeamHeroImg from "../creators/components/CloudGroupHero";
import { ThemeContext } from "../../context/theme-context";
import "./creators.css";
import { designers, developers } from "./creatorsData";

function Cursor({ theme, className }: { theme: string; className?: string }) {
  return (
    <svg
      className={className}
      width="41"
      height="57"
      viewBox="0 0 41 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 54.5V2L38.5 39L14.5 37L1 54.5Z"
        fill={theme == "dark" ? "white" : "black"}
        stroke={theme == "dark" ? "white" : "black"}
        stroke-width="1.5"
      />
    </svg>
  );
}

function Creators() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="creator">
      <div className="creator_landing">
        <div className="creator_landing_cloud">
          <TeamHeroImg theme={theme} />
        </div>
        <div className="creator_landing_head">
          <h1>
            {" "}
            behind the <br />
            creation{" "}
          </h1>
          <div className="creator_landing_subhead">
            <p>
              the powerful creator behind <br />
              manifesting this dream !
            </p>
          </div>
        </div>
      </div>
      <div className="creator_developers">
        <div className="creator_developers_inner">
          <h1>our developers</h1>
          <div className="creator_developers_content">
            <div className="creator_developers_content_ppl">
              <div>
                {developers.map((val, ind) => (
                  <div key={ind}>
                    <img
                      className="creator_developers_images"
                      src={val.imgSrc}
                    />
                    <div className="creator_developers_name">
                      <p>{val.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="creator_designers">
        <div className="creator_designers_inner">
          <h1>our designers</h1>
          <div className="creator_designers_content">
            <div className="creator_designers_content_ppl">
              {designers.map((row, ind) => (
                <div key={ind} className={`creator_designers_row${ind + 1}`}>
                  {row.map((val, ind) => (
                    <div key={ind}>
                      <img
                        className="creator_designers_images"
                        src={val.imgSrc}
                      />
                      <div className="creator_designers_desc">
                        <Cursor
                          className="creator_designers_cursor"
                          theme={theme}
                        />
                        <div className="creator_designers_name">{val.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creators;
