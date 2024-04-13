import React from "react";
import { siteTitle, siteText } from "@/constants";

export const Site = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          {siteTitle.title[0]}
          <em>{siteTitle.title[1]}</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((site, key) => (
            <article className={`site__item s${key + 1}`} key={key}>
              <span className="num">{key + 1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="btn">
                <a href={site.codeUrl}>code</a>
                <a href={site.viewUrl}>view</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
