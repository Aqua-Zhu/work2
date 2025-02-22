import "../scss/_style_ModalLogIn.scss";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ModalLogIn = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState("login"); // 預設是 "會員登入"
    // 鎖定登入彈窗背景頁面滾動
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("lock-scroll");
        } else {
            document.body.classList.remove("lock-scroll");
        }

        return () => {
            document.body.classList.remove("lock-scroll");
        };
    }, [isOpen]);
    if (!isOpen) return null;  // 如果 Modal 沒有開啟，不渲染任何東西

    

    return (
        <>
            <div className="ModalLogIn-overlay" onClick={onClose} >
                <section id="logInWrap" onClick={(e) => e.stopPropagation()}>
                    <img src="./images/icons-X.svg" alt="" id="iconX-logIn" onClick={onClose} />
                    {/* 標籤區塊 */}
                    <div className="tabs">
                        <button
                            className={activeTab === "login" ? "tab active" : "tab"}
                            onClick={() => setActiveTab("login")}
                        >
                            會員登入
                        </button>
                        <button
                            className={activeTab === "register" ? "tab active" : "tab"}
                            onClick={() => setActiveTab("register")}
                        >
                            註冊會員
                        </button>
                    </div>

                    {/* 內容區塊 */}
                    <div className="tab-content">
                        {activeTab === "login" && (
                            <div className="login-form">
                                <h2>Welcome back!</h2>
                                <form>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email-login" placeholder="請輸入您的 Email" />
                                    </div>
                                    <div>
                                        <label htmlFor="password">密碼</label>
                                        <input
                                            type="password"
                                            id="password-login"
                                            placeholder="請輸入您的密碼"
                                        />
                                    </div>
                                    <a href="#"><small>忘記密碼</small></a>
                                    <Link to='/member' id="loginBtn">
                                    <button type="submit" id="memberIn">登入</button>
                                    <hr />
                                    <button id="googleLogin"><FcGoogle /> &nbsp;&nbsp;以 google 繼續</button>
                                    <button id="fbLogin"><FaFacebookF style={{color:'#0866FF'}}/> &nbsp;以 facebook 繼續</button>
                                    </Link>
                                </form>
                            </div>
                        )}
                        {activeTab === "register" && (
                            <div className="register-form">
                                <h2>Welcome on board!</h2>
                                <form>
                                    <div>
                                        <label htmlFor="name">姓名</label>
                                        <input type="text" id="name" placeholder="請輸入您的姓名" />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email-register" placeholder="請輸入您的 Email" />
                                    </div>
                                    <div>
                                        <label htmlFor="password">密碼</label>
                                        <input
                                            type="password"
                                            id="password-register"
                                            placeholder="請輸入您的密碼"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">確認密碼</label>
                                        <input
                                            type="password"
                                            id="password-register-confirm"
                                            placeholder="請再次輸入您的密碼"
                                        />
                                    </div>
                                    <button type="submit" id="createMember">註冊</button>
                                    <hr />
                                    <button id="googleLogin-register"><FcGoogle /> &nbsp;&nbsp;以 google 繼續</button>
                                    <button id="fbLogin-register"><FaFacebookF style={{color:'#0866FF'}}/> &nbsp;以 facebook 繼續</button>
                                </form>
                            </div>
                        )}
                    </div>
                </section>
            </div>

        </>

    );
};


export default ModalLogIn;