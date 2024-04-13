import React from "react";
import { footerText } from "@/constants";

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <h2 className="footer__text">
          <div>HwangsWeb</div>
          <div>@webs</div>
        </h2>
        <div className="footer__info">
          <div className="left">
            <div className="title">
              <a href="#">Sign up</a>
            </div>
            <p className="desc">
              회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.
            </p>
          </div>
          <div className="right">
            <h3>Social</h3>
            <ul>
              {footerText.map((info, key) => (
                <li key={key}>
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    {info.title}
                  </a>
                  <em>{info.desc}</em>
                </li>
              ))}
              ;
            </ul>
          </div>
        </div>
        <div className="footer__right">
          &copy; 2024 hwangsweb
          <br />이 사이트는 Next 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
