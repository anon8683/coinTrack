(()=>{"use strict";var n={426:(n,t,r)=>{r.d(t,{Z:()=>c});var e=r(537),o=r.n(e),i=r(645),A=r.n(i),a=r(667),d=r.n(a),l=new URL(r(801),r.b),s=A()(o());s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Anuphan&family=Schibsted+Grotesk&display=swap);"]);var C=d()(l);s.push([n.id,":root {\r\n\t--grey: rgb(56, 55, 55);\r\n\t--lightGrey: rgba(255, 255, 255, 0.735);\r\n\t--green: rgb(28, 130, 28);\r\n\t--body: rgba(0, 0, 0, 0.886);\r\n}\r\n/* font-family: 'Anuphan', sans-serif; -- digits\r\nfont-family: 'Schibsted Grotesk', sans-serif; --texts */\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n\tfont-family: \"Schibsted Grotesk\", sans-serif;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n}\r\n\r\nbody {\r\n\theight: 100vh;\r\n\tbackground-color: var(--body);\r\n}\r\n\r\nfooter {\r\n\tbackground-color: var(--grey);\r\n}\r\n\r\n#grid-container {\r\n\tdisplay: grid;\r\n\theight: 100vh;\r\n\r\n\tgrid-template-columns: auto;\r\n\tgrid-template-rows: 1fr 15fr 1fr;\r\n}\r\n\r\n/* ----------------------header------------------------------ */\r\n\r\nheader {\r\n\tbackground-color: var(--grey);\r\n}\r\n\r\n#header-flex {\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding: 10px;\r\n\tpadding-top: 20px;\r\n\tborder: 1px solid black;\r\n\tborder-top: none;\r\n}\r\n.joined,\r\n.flex-left,\r\n.buttonsLeft {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 5px;\r\n}\r\n\r\n.joined {\r\n\tflex-wrap: wrap;\r\n\tgap: 30px;\r\n}\r\n\r\n.buttonsLeft {\r\n\tgap: 15px;\r\n}\r\n\r\n#logo {\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tpadding: 5px;\r\n}\r\n\r\nh4,\r\nh3 {\r\n\tcolor: rgb(255, 255, 255);\r\n\tfont-family: \"Schibsted Grotesk\", sans-serif;\r\n\tletter-spacing: 1.2px;\r\n}\r\n\r\nh4 {\r\n\tfont-size: smaller;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n\tcolor: rgba(255, 255, 255, 0.799);\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: underline;\r\n\tcolor: orange;\r\n}\r\n\r\n#navRight {\r\n\t/* padding-right: 30px; */\r\n}\r\n\r\n.navButton {\r\n\twidth: clamp(100px, 15vw, 150px);\r\n\theight: 30px;\r\n\tborder-radius: 15px;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: 600;\r\n\tcolor: rgb(0, 0, 0);\r\n\tborder: 1px solid rgba(0, 0, 0, 0.461);\r\n\tbackground-color: grey;\r\n}\r\n\r\n.navButton:hover,\r\n#addHoldingButton:hover,\r\n.modifyButton:hover,\r\n.editButtons:hover {\r\n\tborder: 1px solid orange;\r\n\tcursor: pointer;\r\n\tbackground-color: rgba(0, 0, 0, 0.495);\r\n\tcolor: rgba(255, 255, 255, 0.799);\r\n\tscale: 1.01;\r\n\ttransition: 0.5s;\r\n}\r\n\r\n/* -----------------------main------------------- */\r\n\r\nmain {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr;\r\n\tgrid-template-columns: minmax(250px, 20vw) 1fr;\r\n}\r\n\r\n.portfolioSide {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 35px;\r\n\tborder-left: 1px solid orange;\r\n}\r\n.mainTop {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.topLeftSide {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n#trendAmount,\r\n#trendingTriangle {\r\n\talign-self: flex-end;\r\n\tpadding-bottom: 10px;\r\n\tfont-size: clamp(0.5rem, 4vw, 0.8rem);\r\n}\r\n#totalValue {\r\n\tcolor: rgba(255, 255, 255, 0.735);\r\n\tfont-size: clamp(1rem, 8vw, 3rem);\r\n\tpadding-right: 10px;\r\n}\r\n\r\n#addHoldingButton {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tfont-size: 1rem;\r\n\tfont-weight: 600;\r\n\tborder-radius: 20px;\r\n\tbackground-color: orange;\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n/* --------------------holdings cards---------- */\r\n.holdingCard {\r\n\talign-items: end;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 0.35fr 1.5fr 1fr 1fr 1fr 0.5fr;\r\n\tbackground-color: var(--grey);\r\n\tborder-bottom: grey 1px solid;\r\n\tgap: 5px;\r\n\tpadding: 3px;\r\n}\r\n\r\n.heading {\r\n\tfont-size: 0.8rem;\r\n\topacity: 75%;\r\n\tpadding: 1px;\r\n\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.value {\r\n\tfont-weight: bold;\r\n}\r\n\r\n.value,\r\n.amount,\r\n.price {\r\n\tcolor: var(--lightGrey);\r\n}\r\n\r\nimg {\r\n\theight: 45px;\r\n\tpadding: 5px;\r\n}\r\n\r\n.loss {\r\n\tcolor: rgba(247, 75, 75, 0.498);\r\n}\r\n\r\n.profit {\r\n\tcolor: rgb(107, 192, 107);\r\n}\r\n\r\n/* --------------------------------------------- */\r\n@media only screen and (max-width: 666px) {\r\n\t.joined,\r\n\t.buttonsLeft {\r\n\t\tgap: 5px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 766px) {\r\n\tmain {\r\n\t\tgrid-template-columns: 1fr;\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t.value,\r\n\t.amount,\r\n\t.price,\r\n\t.profit,\r\n\t.symbol {\r\n\t\tfont-size: 0.65rem;\r\n\t}\r\n\r\n\t.portfolioSide {\r\n\t\tpadding: 0;\r\n\t\tborder: none;\r\n\t}\r\n\t.mainTop {\r\n\t\tpadding: 10px;\r\n\t}\r\n\r\n\t.holdingCard {\r\n\t}\r\n}\r\n.form-container {\r\n\tdisplay: flex;\r\n\twidth: 350px;\r\n\theight: 350px;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\tposition: absolute;\r\n\tgap: 10px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tmargin-top: auto;\r\n\tmargin-bottom: auto;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\ttext-align: center;\r\n\tbackground-color: var(--lSand);\r\n\tpadding: 15px;\r\n\tborder-radius: 5px;\r\n\tborder: 2px solid rgb(8, 12, 7);\r\n\tbackground-size: cover;\r\n\tbackground-color: rgb(40, 39, 39);\r\n\tbox-shadow: 5px 5px 15px 5px #000000;\r\n\tpadding-bottom: 45px;\r\n}\r\n\r\n#form {\r\n\tposition: fixed; /* Sit on top of the page content */\r\n\tdisplay: flex; /* Hidden by default */\r\n\twidth: 100%; /* Full width (cover the whole page) */\r\n\theight: 100%; /* Full height (cover the whole page) */\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbackground-color: rgba(0, 0, 0, 0.85); /* Black background with opacity */\r\n\tz-index: 2; /* Specify a stack order in case you're using a different order for other elements */\r\n}\r\n\r\n#closed {\r\n\tposition: relative;\r\n\ttop: -8px;\r\n\tleft: 297px;\r\n\tright: 0;\r\n\tbottom: 0px;\r\n\theight: 25px;\r\n\tborder: 1px solid black;\r\n\tborder-radius: 0px;\r\n\tpadding-top: 2px;\r\n\tfont-weight: 600;\r\n\tborder-radius: 20px;\r\n\tbackground-color: rgb(241, 170, 170);\r\n\tscale: 1;\r\n\twidth: 25px;\r\n}\r\n\r\nlabel {\r\n\tcolor: white;\r\n\tfont-size: 0.9rem;\r\n}\r\n\r\n.input {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tpadding: 10px;\r\n\tpadding-right: 0px;\r\n\tpadding-left: 0px;\r\n\tborder-bottom: 1px solid rgb(70, 69, 69);\r\n\r\n\talign-items: center;\r\n}\r\n\r\n.input-style {\r\n\twidth: 135px;\r\n\tbackground-color: rgb(40, 39, 39);\r\n\tcolor: white;\r\n}\r\n\r\n.dropdown {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tjustify-self: center;\r\n\talign-self: center;\r\n}\r\n\r\n.btn {\r\n\tbackground-image: url("+C+');\r\n\tbackground-size: contain;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center;\r\n\tcolor: #000000;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n\tscale: 0.75;\r\n\tborder-radius: 5px;\r\n\twidth: 50px;\r\n\theight: 30px;\r\n}\r\n\r\n.dropdown-content {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tright: 0px;\r\n\tmin-width: 120px;\r\n\tdisplay: none;\r\n\tbox-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n\tz-index: 1;\r\n\tborder-bottom-left-radius: 10px;\r\n\tborder-bottom-right-radius: 10px;\r\n\tborder-top-left-radius: 10px;\r\n\tbackground-color: #373737;\r\n}\r\n\r\n.dropdown-content a {\r\n\tcolor: #333;\r\n\tpadding: 8px 16px;\r\n\tdisplay: block;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n\tdisplay: flex;\r\n\ttransition: 0.5s;\r\n\tflex-direction: column;\r\n\tborder: 1px solid orange;\r\n}\r\n\r\n.modifyButton {\r\n\tbackground-color: #373737;\r\n\tborder-radius: 10px;\r\n\tborder: 1px solid #ffffff21;\r\n\tcolor: #ffffff21;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n.modifyButton:hover {\r\n\tborder: 1px solid orange;\r\n\tborder-radius: 0px;\r\n}\r\n\r\n.editButtons {\r\n\tborder-bottom-left-radius: 10px;\r\n\tborder-bottom-right-radius: 10px;\r\n\tborder-top-left-radius: 10px;\r\n\tbackground-color: #373737;\r\n}\r\n\r\n.heading {\r\n\tdisplay: none;\r\n}\r\n\r\n.visible {\r\n\tdisplay: inline;\r\n\tfont-size: 0.85rem;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n/* -------------------------radio------------ */\r\n\r\n.radio {\r\n\tbackground: #454857;\r\n\tpadding: 4px;\r\n\tborder-radius: 3px;\r\n\tbox-shadow: inset 0 0 0 3px rgba(35, 33, 45, 0.3),\r\n\t\t0 0 0 3px rgba(185, 185, 185, 0.3);\r\n\tposition: relative;\r\n}\r\n\r\n.radio input {\r\n\twidth: auto;\r\n\theight: 100%;\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n\tborder-radius: 2px;\r\n\tpadding: 4px 8px;\r\n\tbackground: #454857;\r\n\tcolor: #bdbdbdbd;\r\n\tfont-size: 14px;\r\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\r\n\t\t"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",\r\n\t\t"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\r\n\ttransition: all 100ms linear;\r\n}\r\n\r\n.radio input:checked {\r\n\tbackground-image: linear-gradient(180deg, #95d891, #74bbad);\r\n\tcolor: #fff;\r\n\tbox-shadow: 0 1px 1px #0000002e;\r\n\ttext-shadow: 0 1px 0px #79485f7a;\r\n}\r\n\r\n.radio input:before {\r\n\tcontent: attr(label);\r\n\tdisplay: inline-block;\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n}\r\n/* --------------------------------------------- */\r\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:[':root {\r\n\t--grey: rgb(56, 55, 55);\r\n\t--lightGrey: rgba(255, 255, 255, 0.735);\r\n\t--green: rgb(28, 130, 28);\r\n\t--body: rgba(0, 0, 0, 0.886);\r\n}\r\n\r\n@import url("https://fonts.googleapis.com/css2?family=Anuphan&family=Schibsted+Grotesk&display=swap");\r\n/* font-family: \'Anuphan\', sans-serif; -- digits\r\nfont-family: \'Schibsted Grotesk\', sans-serif; --texts */\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n\tfont-family: "Schibsted Grotesk", sans-serif;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n}\r\n\r\nbody {\r\n\theight: 100vh;\r\n\tbackground-color: var(--body);\r\n}\r\n\r\nfooter {\r\n\tbackground-color: var(--grey);\r\n}\r\n\r\n#grid-container {\r\n\tdisplay: grid;\r\n\theight: 100vh;\r\n\r\n\tgrid-template-columns: auto;\r\n\tgrid-template-rows: 1fr 15fr 1fr;\r\n}\r\n\r\n/* ----------------------header------------------------------ */\r\n\r\nheader {\r\n\tbackground-color: var(--grey);\r\n}\r\n\r\n#header-flex {\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding: 10px;\r\n\tpadding-top: 20px;\r\n\tborder: 1px solid black;\r\n\tborder-top: none;\r\n}\r\n.joined,\r\n.flex-left,\r\n.buttonsLeft {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 5px;\r\n}\r\n\r\n.joined {\r\n\tflex-wrap: wrap;\r\n\tgap: 30px;\r\n}\r\n\r\n.buttonsLeft {\r\n\tgap: 15px;\r\n}\r\n\r\n#logo {\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tpadding: 5px;\r\n}\r\n\r\nh4,\r\nh3 {\r\n\tcolor: rgb(255, 255, 255);\r\n\tfont-family: "Schibsted Grotesk", sans-serif;\r\n\tletter-spacing: 1.2px;\r\n}\r\n\r\nh4 {\r\n\tfont-size: smaller;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n\tcolor: rgba(255, 255, 255, 0.799);\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: underline;\r\n\tcolor: orange;\r\n}\r\n\r\n#navRight {\r\n\t/* padding-right: 30px; */\r\n}\r\n\r\n.navButton {\r\n\twidth: clamp(100px, 15vw, 150px);\r\n\theight: 30px;\r\n\tborder-radius: 15px;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: 600;\r\n\tcolor: rgb(0, 0, 0);\r\n\tborder: 1px solid rgba(0, 0, 0, 0.461);\r\n\tbackground-color: grey;\r\n}\r\n\r\n.navButton:hover,\r\n#addHoldingButton:hover,\r\n.modifyButton:hover,\r\n.editButtons:hover {\r\n\tborder: 1px solid orange;\r\n\tcursor: pointer;\r\n\tbackground-color: rgba(0, 0, 0, 0.495);\r\n\tcolor: rgba(255, 255, 255, 0.799);\r\n\tscale: 1.01;\r\n\ttransition: 0.5s;\r\n}\r\n\r\n/* -----------------------main------------------- */\r\n\r\nmain {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr;\r\n\tgrid-template-columns: minmax(250px, 20vw) 1fr;\r\n}\r\n\r\n.portfolioSide {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 35px;\r\n\tborder-left: 1px solid orange;\r\n}\r\n.mainTop {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.topLeftSide {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n#trendAmount,\r\n#trendingTriangle {\r\n\talign-self: flex-end;\r\n\tpadding-bottom: 10px;\r\n\tfont-size: clamp(0.5rem, 4vw, 0.8rem);\r\n}\r\n#totalValue {\r\n\tcolor: rgba(255, 255, 255, 0.735);\r\n\tfont-size: clamp(1rem, 8vw, 3rem);\r\n\tpadding-right: 10px;\r\n}\r\n\r\n#addHoldingButton {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tfont-size: 1rem;\r\n\tfont-weight: 600;\r\n\tborder-radius: 20px;\r\n\tbackground-color: orange;\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n/* --------------------holdings cards---------- */\r\n.holdingCard {\r\n\talign-items: end;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 0.35fr 1.5fr 1fr 1fr 1fr 0.5fr;\r\n\tbackground-color: var(--grey);\r\n\tborder-bottom: grey 1px solid;\r\n\tgap: 5px;\r\n\tpadding: 3px;\r\n}\r\n\r\n.heading {\r\n\tfont-size: 0.8rem;\r\n\topacity: 75%;\r\n\tpadding: 1px;\r\n\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.value {\r\n\tfont-weight: bold;\r\n}\r\n\r\n.value,\r\n.amount,\r\n.price {\r\n\tcolor: var(--lightGrey);\r\n}\r\n\r\nimg {\r\n\theight: 45px;\r\n\tpadding: 5px;\r\n}\r\n\r\n.loss {\r\n\tcolor: rgba(247, 75, 75, 0.498);\r\n}\r\n\r\n.profit {\r\n\tcolor: rgb(107, 192, 107);\r\n}\r\n\r\n/* --------------------------------------------- */\r\n@media only screen and (max-width: 666px) {\r\n\t.joined,\r\n\t.buttonsLeft {\r\n\t\tgap: 5px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 766px) {\r\n\tmain {\r\n\t\tgrid-template-columns: 1fr;\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t.value,\r\n\t.amount,\r\n\t.price,\r\n\t.profit,\r\n\t.symbol {\r\n\t\tfont-size: 0.65rem;\r\n\t}\r\n\r\n\t.portfolioSide {\r\n\t\tpadding: 0;\r\n\t\tborder: none;\r\n\t}\r\n\t.mainTop {\r\n\t\tpadding: 10px;\r\n\t}\r\n\r\n\t.holdingCard {\r\n\t}\r\n}\r\n.form-container {\r\n\tdisplay: flex;\r\n\twidth: 350px;\r\n\theight: 350px;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\tposition: absolute;\r\n\tgap: 10px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tmargin-top: auto;\r\n\tmargin-bottom: auto;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\ttext-align: center;\r\n\tbackground-color: var(--lSand);\r\n\tpadding: 15px;\r\n\tborder-radius: 5px;\r\n\tborder: 2px solid rgb(8, 12, 7);\r\n\tbackground-size: cover;\r\n\tbackground-color: rgb(40, 39, 39);\r\n\tbox-shadow: 5px 5px 15px 5px #000000;\r\n\tpadding-bottom: 45px;\r\n}\r\n\r\n#form {\r\n\tposition: fixed; /* Sit on top of the page content */\r\n\tdisplay: flex; /* Hidden by default */\r\n\twidth: 100%; /* Full width (cover the whole page) */\r\n\theight: 100%; /* Full height (cover the whole page) */\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbackground-color: rgba(0, 0, 0, 0.85); /* Black background with opacity */\r\n\tz-index: 2; /* Specify a stack order in case you\'re using a different order for other elements */\r\n}\r\n\r\n#closed {\r\n\tposition: relative;\r\n\ttop: -8px;\r\n\tleft: 297px;\r\n\tright: 0;\r\n\tbottom: 0px;\r\n\theight: 25px;\r\n\tborder: 1px solid black;\r\n\tborder-radius: 0px;\r\n\tpadding-top: 2px;\r\n\tfont-weight: 600;\r\n\tborder-radius: 20px;\r\n\tbackground-color: rgb(241, 170, 170);\r\n\tscale: 1;\r\n\twidth: 25px;\r\n}\r\n\r\nlabel {\r\n\tcolor: white;\r\n\tfont-size: 0.9rem;\r\n}\r\n\r\n.input {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tpadding: 10px;\r\n\tpadding-right: 0px;\r\n\tpadding-left: 0px;\r\n\tborder-bottom: 1px solid rgb(70, 69, 69);\r\n\r\n\talign-items: center;\r\n}\r\n\r\n.input-style {\r\n\twidth: 135px;\r\n\tbackground-color: rgb(40, 39, 39);\r\n\tcolor: white;\r\n}\r\n\r\n.dropdown {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tjustify-self: center;\r\n\talign-self: center;\r\n}\r\n\r\n.btn {\r\n\tbackground-image: url(.//img/pencil.png);\r\n\tbackground-size: contain;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center;\r\n\tcolor: #000000;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n\tscale: 0.75;\r\n\tborder-radius: 5px;\r\n\twidth: 50px;\r\n\theight: 30px;\r\n}\r\n\r\n.dropdown-content {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tright: 0px;\r\n\tmin-width: 120px;\r\n\tdisplay: none;\r\n\tbox-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n\tz-index: 1;\r\n\tborder-bottom-left-radius: 10px;\r\n\tborder-bottom-right-radius: 10px;\r\n\tborder-top-left-radius: 10px;\r\n\tbackground-color: #373737;\r\n}\r\n\r\n.dropdown-content a {\r\n\tcolor: #333;\r\n\tpadding: 8px 16px;\r\n\tdisplay: block;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n\tdisplay: flex;\r\n\ttransition: 0.5s;\r\n\tflex-direction: column;\r\n\tborder: 1px solid orange;\r\n}\r\n\r\n.modifyButton {\r\n\tbackground-color: #373737;\r\n\tborder-radius: 10px;\r\n\tborder: 1px solid #ffffff21;\r\n\tcolor: #ffffff21;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n.modifyButton:hover {\r\n\tborder: 1px solid orange;\r\n\tborder-radius: 0px;\r\n}\r\n\r\n.editButtons {\r\n\tborder-bottom-left-radius: 10px;\r\n\tborder-bottom-right-radius: 10px;\r\n\tborder-top-left-radius: 10px;\r\n\tbackground-color: #373737;\r\n}\r\n\r\n.heading {\r\n\tdisplay: none;\r\n}\r\n\r\n.visible {\r\n\tdisplay: inline;\r\n\tfont-size: 0.85rem;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n/* -------------------------radio------------ */\r\n\r\n.radio {\r\n\tbackground: #454857;\r\n\tpadding: 4px;\r\n\tborder-radius: 3px;\r\n\tbox-shadow: inset 0 0 0 3px rgba(35, 33, 45, 0.3),\r\n\t\t0 0 0 3px rgba(185, 185, 185, 0.3);\r\n\tposition: relative;\r\n}\r\n\r\n.radio input {\r\n\twidth: auto;\r\n\theight: 100%;\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n\tborder-radius: 2px;\r\n\tpadding: 4px 8px;\r\n\tbackground: #454857;\r\n\tcolor: #bdbdbdbd;\r\n\tfont-size: 14px;\r\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\r\n\t\t"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",\r\n\t\t"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\r\n\ttransition: all 100ms linear;\r\n}\r\n\r\n.radio input:checked {\r\n\tbackground-image: linear-gradient(180deg, #95d891, #74bbad);\r\n\tcolor: #fff;\r\n\tbox-shadow: 0 1px 1px #0000002e;\r\n\ttext-shadow: 0 1px 0px #79485f7a;\r\n}\r\n\r\n.radio input:before {\r\n\tcontent: attr(label);\r\n\tdisplay: inline-block;\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n}\r\n/* --------------------------------------------- */\r\n'],sourceRoot:""}]);const c=s},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r="",e=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),e&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=n(t),e&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(n,r,e,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(e)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(A[d]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);e&&A[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var t=n[1],r=n[3];if(!r)return t;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),i="/*# ".concat(o," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},379:n=>{var t=[];function r(n){for(var r=-1,e=0;e<t.length;e++)if(t[e].identifier===n){r=e;break}return r}function e(n,e){for(var i={},A=[],a=0;a<n.length;a++){var d=n[a],l=e.base?d[0]+e.base:d[0],s=i[l]||0,C="".concat(l," ").concat(s);i[l]=s+1;var c=r(C),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==c)t[c].references++,t[c].updater(p);else{var u=o(p,e);e.byIndex=a,t.splice(a,0,{identifier:C,updater:u,references:1})}A.push(C)}return A}function o(n,t){var r=t.domAPI(t);return r.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;r.update(n=t)}else r.remove()}}n.exports=function(n,o){var i=e(n=n||[],o=o||{});return function(n){n=n||[];for(var A=0;A<i.length;A++){var a=r(i[A]);t[a].references--}for(var d=e(n,o),l=0;l<i.length;l++){var s=r(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=d}}},569:n=>{var t={};n.exports=function(n,r){var e=function(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,r)=>{n.exports=function(n){var t=r.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(r){!function(n,t,r){var e="";r.supports&&(e+="@supports (".concat(r.supports,") {")),r.media&&(e+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(e+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),e+=r.css,o&&(e+="}"),r.media&&(e+="}"),r.supports&&(e+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(e,n,t.options)}(t,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},801:(n,t,r)=>{n.exports=r.p+"c4b0a302c1a24d5b2568.png"}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var t=r.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var e=t.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{const n=function(){document.getElementById("popUpForm").remove()},t=function(){localStorage.setItem("coins",JSON.stringify(holdings))},e=function(r){const e=holdings[r];console.log(e);const o=document.getElementsByTagName("main")[0],a=document.createElement("div");a.setAttribute("id","popUpForm"),a.innerHTML=` \n  <div class="form-popup" id="form">\n  \n  <form action="#" method="post" class="form-container" id="form1">\n<button type="button" id="closed">x</button>\n    <div class="input">\n\t\t\t\t\t<label for="ticker">Editting ${e.symbol} holding</label>\n\t\t\t\t\n                    <div class="radio">\n\t<input checked="" value="male" name="gender" id="male" type="radio" label="Buy">\n\t<input value="female" name="gender" id="female" type="radio" label="Sell">\n\t\n</div>\n\t\t\t\t</div>\n\n    <div class="input">\n    <label for="ticker">Amount:</label>\n      <input\n        placeholder="quantity"\n        class="input-style"\n        id="amount"\n        type="text"\n      />\n    </div>\n\n    <div class="input">\n    <label for="ticker">stfu:</label>\n      <input\n        placeholder="price"\n        class="input-style"\n        id="price"\n        type="number"\n      />\n    </div>\n    <button type="button" class="btn" id="editSubmit">Edit Holding</button>\n  </form>\n</div>`,o.appendChild(a),document.getElementById("closed").addEventListener("click",(t=>{n()})),document.getElementById("editSubmit").addEventListener("click",(o=>{let a=document.getElementById("amount").value,d=document.getElementById("price").value;(function(n,r,e,o){const a=n;console.log(total);const d=+r+ +a.amount,l=+a.market_price*+r;total+=l;const s=(a.price*a.amount+r*e)/d;a.price=s,a.amount=d,a.value=a.value+l,t(),i(),A(o)})(e,a,d,r),n()}))};function o(){const n=holdings.length-1,r=document.getElementsByClassName("portfolioSide")[0],o=document.createElement("div"),d=(document.getElementById("totalValue"),document.getElementById("trendAmount")),l=document.getElementById("trendingTriangle");console.log,o.setAttribute("id",`${n}`),o.setAttribute("class","holdingCard"),o.innerHTML=`\n\t\t<div class="join">\n\t\t\t<div class="symbol">${holdings[n].symbol}</div>\n\t\t\t<div class="value" id="value${n}"></div>\n\t\t</div>\n\t\t<div class="join">\n\t\t\t<div class="heading" id="heading${n}">QTY</div>\n\t\t\t<div class="amount" id="amount${n}">${a(holdings[n].amount)}</div>\n\t\t</div>\n\t\t<div class="join">\n\t\t\t<div class="heading" id="heading${n}">PnL</div>\n\t\t\t<div class="pnl" id="pnl${n}"></div>\n\t\t</div>\n\t\t<div class="join">\n\t\t\t<div class="heading" id="heading${n}">Price</div>\n\t\t\t<div class="price" id="price${n}"></div>\n\t\t</div>\n\t\t<div class="dropdown">\n\t\t<button class="modifyButton" >:</button>\n\t\t <div class="dropdown-content">\n\t\t<button class="editButtons ${n}" id="buttonEdit${n}">Edit</a>\n\t\t<button class="editButtons ${n}" id="buttonDelete${n}"Yeah>Delete</a>\n\t  </div>`,r.appendChild(o),c(),p(),async function(t){const r=await fetch("https://api.coingecko.com/api/v3/coins/list"),e=`https://api.coingecko.com/api/v3/coins/${(await r.json()).find((n=>n.symbol.toLowerCase()===t.toLowerCase())).id}`,o=await fetch(e),d=await o.json(),l=d.image.small;let s=d.market_data.current_price.usd;const c=d.market_data.price_change_24h,p=document.getElementById(`${n}`),u=document.createElement("img");u.setAttribute("src",`${l}`),p.prepend(u),s=s>5?s.toFixed(1):s.toFixed(4);const g=holdings[n].amount,m=s*g,B=m-holdings[n].price*g;total+=s*g,holdings[n].value=m,holdings[n].market_price=s,holdings[n].price_change=c*g,i(),A(n,m),function(n,t){const r=document.getElementById(`pnl${n}`);if(r.textContent=`$${a(t.toFixed(2))}`,t<0)return r.textContent=`-$${a(-1*t.toFixed(2))}`,void r.setAttribute("class","loss");r.setAttribute("class","profit")}(n,B),function(n,t){const r=document.getElementById(`price${n}`);r.textContent=`$${a(t)}`,t<1e3&&(r.textContent=`$${t}`)}(n,s),yesterdayTotal+=c*holdings[n].amount,C()}(`${holdings[n].symbol}`),document.getElementById(`value${n}`),document.getElementById(`pnl${n}`),document.getElementById(`price${n}`);const s=document.getElementsByClassName(`${n}`);function C(){let n=total+yesterdayTotal;if(0===yesterdayTotal)return d.textContent="",void(l.textContent="");if(yesterdayTotal<0){let t=(total-n)/total*100;return d.textContent=`-$${a(-1*yesterdayTotal.toFixed(0))} (${t.toFixed(2)}%)`,d.setAttribute("class","loss"),l.setAttribute("class","loss"),void(l.textContent="▼")}if(yesterdayTotal>0){let t=(n-total)/n*100;return d.textContent=`$${a(yesterdayTotal.toFixed(0))} (${t.toFixed(2)}%)`,d.setAttribute("class","profit"),l.setAttribute("class","profit"),void(l.textContent="▲")}}function c(){return Array.from(r.children)[1].id}function p(){const n=c(),t=Array.from(r.children),e=document.getElementById(`${n}`);e.style.borderRadius="0px",e.style.borderTopRightRadius="10px",e.style.borderTopLeftRadius="10px",document.querySelectorAll(`#heading${n}`).forEach((n=>n.setAttribute("class","visible")));const o=document.getElementById(`${function(){const n=Array.from(r.children);return n[n.length-1].id}()}`);o.style.borderRadius="0px",o.style.borderBottomRightRadius="10px",o.style.borderBottomLeftRadius="10px",t.length<=2&&(e.style.borderRadius="10px")}Array.from(s).forEach((n=>n.addEventListener("click",(o=>{if(n.id.includes("Delete")){const e=n.id.slice(-1);if(function(n){document.getElementById(`${n}`).remove()}(e),function(n){total-=holdings[n].value,yesterdayTotal-=holdings[n].price_change,i(),C(),delete holdings[n]}(e),t(),Array.from(r.children).length<2)return;p()}console.log(`${n.id}`);const A=n.id.slice(-1);e(A)}))))}function i(){document.getElementById("totalValue").textContent=`$${a(total.toFixed(0))}`,console.log("total called!")}function A(n,t){document.getElementById(`value${n}`).textContent=`$${a(t.toFixed(1))}`}function a(n){return n<1&&n>0?n:n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const d=function(){const r=document.getElementsByTagName("main")[0],e=document.createElement("div");e.setAttribute("id","popUpForm"),e.innerHTML=' \n  <div class="form-popup" id="form">\n  \n  <form action="#" method="post" class="form-container" id="form1">\n<button type="button" id="closed">x</button>\n    <div class="input">\n\t\t\t\t\t<label for="ticker">Coin:</label>\n\t\t\t\t\t<input\n\t\t\t\t\t\tplaceholder="$ticker"\n\t\t\t\t\t\tclass="input-style"\n\t\t\t\t\t\tid="symbol"\n\t\t\t\t\t\ttype="text"\n\t\t\t\t\t\tname="ticker"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\n    <div class="input">\n    <label for="ticker">Amount:</label>\n      <input\n        placeholder="quantity"\n        class="input-style"\n        id="amount"\n        type="text"\n      />\n    </div>\n\n    <div class="input">\n    <label for="ticker">Price:</label>\n      <input\n        placeholder="price"\n        class="input-style"\n        id="price"\n        type="number"\n      />\n    </div>\n    \n    <div class="input">\n    <label for="ticker">Date</label>\n      <input\n        placeholder="Date&Time"\n        class="input-style"\n        id="date"\n        type="datetime-local"\n      />\n    </div>\n\n    <button type="button" class="btn" id="submit">Add coin</button>\n  </form>\n</div>',r.appendChild(e),document.getElementById("closed").addEventListener("click",(t=>{n()})),document.getElementById("submit").addEventListener("click",(r=>{holdings.push(function(){const n=document.getElementById("symbol").value.toUpperCase(),t=document.getElementById("price").value,r=document.getElementById("amount").value;return new class{constructor(n,t,r){this.symbol=n,this.price=t,this.amount=r}}(n,t,r)}()),t(),o(),n()}))};var l=r(379),s=r.n(l),C=r(795),c=r.n(C),p=r(569),u=r.n(p),g=r(565),m=r.n(g),B=r(216),b=r.n(B),f=r(589),h=r.n(f),x=r(426),y={};y.styleTagTransform=h(),y.setAttributes=m(),y.insert=u().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=b(),s()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals,document.getElementsByTagName("body")[0].innerHTML='<div id="grid-container">\n    <header></header>\n    <main></main>\n    <footer></footer>\n</div>',document.getElementsByTagName("header")[0].innerHTML='\t<div id="header-flex">\n\t<div class="joined">\n\t\t<div class="flex-left">\n\t\t\t<img id="logo" src="/repos/coinTrack/src/img/logo.svg" alt="#" />\n\t\t\t<h3>CoinTracker</h3>\n\t\t</div>\n\t\t<div class="buttonsLeft">\n\t\t\t<button id="portfolioButton" class="navButton">Portfolio</button>\n\t\t\t<button id="marketButton" class="navButton">Markets</button>\n\t\t\t<button id="newsButton" class="navButton">News</button>\n\t\t</div>\n\t</div>\n\t<div class="joined" id="navRight">\n\t\t<h4><a href="#">Sign up</a></h4>\n\t\t<h4><a href="#">Login</a></h4>\n\t</div>\n</div>\n\t',document.getElementsByTagName("main")[0].innerHTML='\t\t\t\t\t<div>left hand stuff</div>\n    <div class="portfolioSide">\n        <div class="mainTop">\n            <div class="topLeftSide">\n                <h1 id="totalValue">$0</h1>\n                <div id="trendingTriangle"></div>\n                <h4 id="trendAmount"></h4>\n            </div>\n            <button id="addHoldingButton">+</button>\n        </div>\n  </div>\n</div>\n\n    </div>',window.holdings=[],window.total=0,window.yesterdayTotal=0,document.getElementById("addHoldingButton").addEventListener("click",(n=>{d()})),window.addEventListener("load",(n=>{if(null!=localStorage.getItem("coins")){window.coins=JSON.parse(localStorage.getItem("coins")).filter((n=>n));for(let n=0;n<coins.length;n++){const t=coins[n];holdings.push(t),o()}}}))})()})();
//# sourceMappingURL=bundle.js.map