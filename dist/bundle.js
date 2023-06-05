(()=>{"use strict";var n={426:(n,t,r)=>{r.d(t,{Z:()=>c});var e=r(537),o=r.n(e),A=r(645),i=r.n(A),a=r(667),d=r.n(a),C=new URL(r(801),r.b),s=i()(o());s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Anuphan&family=Schibsted+Grotesk&display=swap);"]);var l=d()(C);s.push([n.id,":root {\r\n\t--grey: rgb(56, 55, 55);\r\n\t--lightGrey: rgba(255, 255, 255, 0.735);\r\n\t--green: rgb(28, 130, 28);\r\n\t--body: rgba(0, 0, 0, 0.886);\r\n}\r\n/* font-family: 'Anuphan', sans-serif; -- digits\r\nfont-family: 'Schibsted Grotesk', sans-serif; --texts */\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n\tfont-family: \"Schibsted Grotesk\", sans-serif;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n}\r\n\r\nbody {\r\n\theight: 100vh;\r\n\tbackground-color: var(--body);\r\n}\r\n\r\nfooter {\r\n\tbackground-color: var(--grey);\r\n}\r\n\r\n#grid-container {\r\n\tdisplay: grid;\r\n\theight: 100vh;\r\n\r\n\tgrid-template-columns: auto;\r\n\tgrid-template-rows: 1fr 15fr 1fr;\r\n}\r\n\r\n/* ----------------------header------------------------------ */\r\n\r\nheader {\r\n\tbackground-color: var(--grey);\r\n}\r\n\r\n#header-flex {\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding: 10px;\r\n\tpadding-top: 20px;\r\n\tborder: 1px solid black;\r\n\tborder-top: none;\r\n}\r\n.joined,\r\n.flex-left,\r\n.buttonsLeft {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 5px;\r\n}\r\n\r\n.joined {\r\n\tflex-wrap: wrap;\r\n\tgap: 30px;\r\n}\r\n\r\n.buttonsLeft {\r\n\tgap: 15px;\r\n}\r\n\r\n#logo {\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tpadding: 5px;\r\n}\r\n\r\nh4,\r\nh3 {\r\n\tcolor: rgb(255, 255, 255);\r\n\tfont-family: \"Schibsted Grotesk\", sans-serif;\r\n\tletter-spacing: 1.2px;\r\n}\r\n\r\nh4 {\r\n\tfont-size: smaller;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n\tcolor: rgba(255, 255, 255, 0.799);\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: underline;\r\n\tcolor: orange;\r\n}\r\n\r\n#navRight {\r\n\t/* padding-right: 30px; */\r\n}\r\n\r\n.navButton {\r\n\twidth: clamp(100px, 15vw, 150px);\r\n\theight: 30px;\r\n\tborder-radius: 15px;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: 600;\r\n\tcolor: rgb(0, 0, 0);\r\n\tborder: 1px solid rgba(0, 0, 0, 0.461);\r\n\tbackground-color: grey;\r\n}\r\n\r\n.navButton:hover,\r\n#addHoldingButton:hover {\r\n\tborder: 1px solid orange;\r\n\tcursor: pointer;\r\n\tbackground-color: rgba(0, 0, 0, 0.495);\r\n\tcolor: rgba(255, 255, 255, 0.799);\r\n\tscale: 1.01;\r\n\ttransition: 0.5s;\r\n}\r\n\r\n/* -----------------------main------------------- */\r\n\r\nmain {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr;\r\n\tgrid-template-columns: minmax(250px, 20vw) 1fr;\r\n}\r\n\r\n.portfolioSide {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 35px;\r\n\tborder-left: 1px solid orange;\r\n}\r\n.mainTop {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.topLeftSide {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n#trendAmount,\r\n#trendingTriangle {\r\n\talign-self: flex-end;\r\n\tpadding-bottom: 10px;\r\n\tfont-size: clamp(0.5rem, 4vw, 0.8rem);\r\n}\r\n#totalValue {\r\n\tcolor: rgba(255, 255, 255, 0.735);\r\n\tfont-size: clamp(1rem, 8vw, 3rem);\r\n\tpadding-right: 10px;\r\n}\r\n\r\n#addHoldingButton {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tfont-size: 1rem;\r\n\tfont-weight: 600;\r\n\tborder-radius: 20px;\r\n\tbackground-color: orange;\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n/* --------------------holdings cards---------- */\r\n.holdingCard {\r\n\talign-items: end;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 0.35fr 1.5fr 1fr 1fr 1fr 0.5fr;\r\n\tbackground-color: var(--grey);\r\n\tborder-bottom: grey 1px solid;\r\n\tgap: 5px;\r\n\tpadding: 3px;\r\n}\r\n\r\n.symbol {\r\n\tfont-size: 0.8rem;\r\n\topacity: 75%;\r\n\tpadding: 1px;\r\n}\r\n\r\n.value {\r\n\tfont-weight: bold;\r\n}\r\n\r\n.value,\r\n.amount,\r\n.price {\r\n\tcolor: var(--lightGrey);\r\n}\r\n\r\nimg {\r\n\theight: 45px;\r\n\tpadding: 5px;\r\n}\r\n\r\n.loss {\r\n\tcolor: rgba(247, 75, 75, 0.498);\r\n}\r\n\r\n.profit {\r\n\tcolor: rgb(107, 192, 107);\r\n}\r\n\r\n/* --------------------------------------------- */\r\n@media only screen and (max-width: 666px) {\r\n\t.joined,\r\n\t.buttonsLeft {\r\n\t\tgap: 5px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 766px) {\r\n\tmain {\r\n\t\tgrid-template-columns: 1fr;\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t.value,\r\n\t.amount,\r\n\t.price,\r\n\t.profit,\r\n\t.symbol {\r\n\t\tfont-size: 0.65rem;\r\n\t}\r\n\r\n\t.portfolioSide {\r\n\t\tpadding: 0;\r\n\t\tborder: none;\r\n\t}\r\n\t.mainTop {\r\n\t\tpadding: 10px;\r\n\t}\r\n\r\n\t.holdingCard {\r\n\t}\r\n}\r\n.form-container {\r\n\tdisplay: flex;\r\n\twidth: 250px;\r\n\theight: 180px;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\tposition: absolute;\r\n\tgap: 10px;\r\n\talign-items: center;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tmargin-top: auto;\r\n\tmargin-bottom: auto;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\ttext-align: center;\r\n\tbackground-color: var(--lSand);\r\n\tpadding: 25px;\r\n\tborder-radius: 5px;\r\n\tborder: 2px solid rgb(8, 12, 7);\r\n\tbackground-size: cover;\r\n\tbackground-color: rgb(95, 94, 92);\r\n\tbox-shadow: 5px 5px 15px 5px #000000;\r\n\tpadding-bottom: 45px;\r\n}\r\n\r\n#form {\r\n\tposition: fixed; /* Sit on top of the page content */\r\n\tdisplay: flex; /* Hidden by default */\r\n\twidth: 100%; /* Full width (cover the whole page) */\r\n\theight: 100%; /* Full height (cover the whole page) */\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbackground-color: rgba(0, 0, 0, 0.85); /* Black background with opacity */\r\n\tz-index: 2; /* Specify a stack order in case you're using a different order for other elements */\r\n}\r\n\r\n#closed {\r\n\tposition: relative;\r\n\ttop: 7px;\r\n\tleft: 105px;\r\n\tright: 0;\r\n\tbottom: 0px;\r\n\theight: 25px;\r\n\tborder: 1px solid black;\r\n\tborder-radius: 0px;\r\n\tpadding-top: 2px;\r\n\tfont-weight: 600;\r\n\tborder-radius: 20px;\r\n\tbackground-color: rgb(241, 170, 170);\r\n\tscale: 0.9;\r\n}\r\n\r\n.dropdown {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.btn {\r\n\tbackground-image: url("+l+");\r\n\tbackground-size: contain;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center;\r\n\tcolor: #000000;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n\tscale: 0.75;\r\n\tborder-radius: 5px;\r\n\twidth: 50px;\r\n\theight: 30px;\r\n}\r\n\r\n.dropdown-content {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tright: 20px;\r\n\tbackground-color: #f9f9f9;\r\n\tmin-width: 120px;\r\n\tdisplay: none;\r\n\tbox-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n\tz-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n\tcolor: #333;\r\n\tpadding: 8px 16px;\r\n\tdisplay: block;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n\tdisplay: block;\r\n}\r\n\r\n/* CSS */\r\n.button-59 {\r\n\talign-items: center;\r\n\tbackground-color: #fff;\r\n\tborder: 2px solid #000;\r\n\tbox-sizing: border-box;\r\n\tcolor: #000;\r\n\tcursor: pointer;\r\n\tdisplay: inline-flex;\r\n\tfill: #000;\r\n\tfont-family: Inter, sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 600;\r\n\theight: 48px;\r\n\tjustify-content: center;\r\n\tletter-spacing: -0.8px;\r\n\tline-height: 24px;\r\n\tmin-width: 140px;\r\n\toutline: 0;\r\n\tpadding: 0 17px;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\ttransition: all 0.3s;\r\n\tuser-select: none;\r\n\t-webkit-user-select: none;\r\n\ttouch-action: manipulation;\r\n}\r\n\r\n.button-59:focus {\r\n\tcolor: #171e29;\r\n}\r\n\r\n.button-59:hover {\r\n\tborder-color: #06f;\r\n\tcolor: #06f;\r\n\tfill: #06f;\r\n}\r\n\r\n.button-59:active {\r\n\tborder-color: #06f;\r\n\tcolor: #06f;\r\n\tfill: #06f;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\t.button-59 {\r\n\t\tmin-width: 170px;\r\n\t}\r\n}\r\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:[':root {\r\n\t--grey: rgb(56, 55, 55);\r\n\t--lightGrey: rgba(255, 255, 255, 0.735);\r\n\t--green: rgb(28, 130, 28);\r\n\t--body: rgba(0, 0, 0, 0.886);\r\n}\r\n\r\n@import url("https://fonts.googleapis.com/css2?family=Anuphan&family=Schibsted+Grotesk&display=swap");\r\n/* font-family: \'Anuphan\', sans-serif; -- digits\r\nfont-family: \'Schibsted Grotesk\', sans-serif; --texts */\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n\tfont-family: "Schibsted Grotesk", sans-serif;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n}\r\n\r\nbody {\r\n\theight: 100vh;\r\n\tbackground-color: var(--body);\r\n}\r\n\r\nfooter {\r\n\tbackground-color: var(--grey);\r\n}\r\n\r\n#grid-container {\r\n\tdisplay: grid;\r\n\theight: 100vh;\r\n\r\n\tgrid-template-columns: auto;\r\n\tgrid-template-rows: 1fr 15fr 1fr;\r\n}\r\n\r\n/* ----------------------header------------------------------ */\r\n\r\nheader {\r\n\tbackground-color: var(--grey);\r\n}\r\n\r\n#header-flex {\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding: 10px;\r\n\tpadding-top: 20px;\r\n\tborder: 1px solid black;\r\n\tborder-top: none;\r\n}\r\n.joined,\r\n.flex-left,\r\n.buttonsLeft {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 5px;\r\n}\r\n\r\n.joined {\r\n\tflex-wrap: wrap;\r\n\tgap: 30px;\r\n}\r\n\r\n.buttonsLeft {\r\n\tgap: 15px;\r\n}\r\n\r\n#logo {\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tpadding: 5px;\r\n}\r\n\r\nh4,\r\nh3 {\r\n\tcolor: rgb(255, 255, 255);\r\n\tfont-family: "Schibsted Grotesk", sans-serif;\r\n\tletter-spacing: 1.2px;\r\n}\r\n\r\nh4 {\r\n\tfont-size: smaller;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n\tcolor: rgba(255, 255, 255, 0.799);\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: underline;\r\n\tcolor: orange;\r\n}\r\n\r\n#navRight {\r\n\t/* padding-right: 30px; */\r\n}\r\n\r\n.navButton {\r\n\twidth: clamp(100px, 15vw, 150px);\r\n\theight: 30px;\r\n\tborder-radius: 15px;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: 600;\r\n\tcolor: rgb(0, 0, 0);\r\n\tborder: 1px solid rgba(0, 0, 0, 0.461);\r\n\tbackground-color: grey;\r\n}\r\n\r\n.navButton:hover,\r\n#addHoldingButton:hover {\r\n\tborder: 1px solid orange;\r\n\tcursor: pointer;\r\n\tbackground-color: rgba(0, 0, 0, 0.495);\r\n\tcolor: rgba(255, 255, 255, 0.799);\r\n\tscale: 1.01;\r\n\ttransition: 0.5s;\r\n}\r\n\r\n/* -----------------------main------------------- */\r\n\r\nmain {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr;\r\n\tgrid-template-columns: minmax(250px, 20vw) 1fr;\r\n}\r\n\r\n.portfolioSide {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 35px;\r\n\tborder-left: 1px solid orange;\r\n}\r\n.mainTop {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.topLeftSide {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n#trendAmount,\r\n#trendingTriangle {\r\n\talign-self: flex-end;\r\n\tpadding-bottom: 10px;\r\n\tfont-size: clamp(0.5rem, 4vw, 0.8rem);\r\n}\r\n#totalValue {\r\n\tcolor: rgba(255, 255, 255, 0.735);\r\n\tfont-size: clamp(1rem, 8vw, 3rem);\r\n\tpadding-right: 10px;\r\n}\r\n\r\n#addHoldingButton {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tfont-size: 1rem;\r\n\tfont-weight: 600;\r\n\tborder-radius: 20px;\r\n\tbackground-color: orange;\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n/* --------------------holdings cards---------- */\r\n.holdingCard {\r\n\talign-items: end;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 0.35fr 1.5fr 1fr 1fr 1fr 0.5fr;\r\n\tbackground-color: var(--grey);\r\n\tborder-bottom: grey 1px solid;\r\n\tgap: 5px;\r\n\tpadding: 3px;\r\n}\r\n\r\n.symbol {\r\n\tfont-size: 0.8rem;\r\n\topacity: 75%;\r\n\tpadding: 1px;\r\n}\r\n\r\n.value {\r\n\tfont-weight: bold;\r\n}\r\n\r\n.value,\r\n.amount,\r\n.price {\r\n\tcolor: var(--lightGrey);\r\n}\r\n\r\nimg {\r\n\theight: 45px;\r\n\tpadding: 5px;\r\n}\r\n\r\n.loss {\r\n\tcolor: rgba(247, 75, 75, 0.498);\r\n}\r\n\r\n.profit {\r\n\tcolor: rgb(107, 192, 107);\r\n}\r\n\r\n/* --------------------------------------------- */\r\n@media only screen and (max-width: 666px) {\r\n\t.joined,\r\n\t.buttonsLeft {\r\n\t\tgap: 5px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 766px) {\r\n\tmain {\r\n\t\tgrid-template-columns: 1fr;\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t.value,\r\n\t.amount,\r\n\t.price,\r\n\t.profit,\r\n\t.symbol {\r\n\t\tfont-size: 0.65rem;\r\n\t}\r\n\r\n\t.portfolioSide {\r\n\t\tpadding: 0;\r\n\t\tborder: none;\r\n\t}\r\n\t.mainTop {\r\n\t\tpadding: 10px;\r\n\t}\r\n\r\n\t.holdingCard {\r\n\t}\r\n}\r\n.form-container {\r\n\tdisplay: flex;\r\n\twidth: 250px;\r\n\theight: 180px;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\tposition: absolute;\r\n\tgap: 10px;\r\n\talign-items: center;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tmargin-top: auto;\r\n\tmargin-bottom: auto;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\ttext-align: center;\r\n\tbackground-color: var(--lSand);\r\n\tpadding: 25px;\r\n\tborder-radius: 5px;\r\n\tborder: 2px solid rgb(8, 12, 7);\r\n\tbackground-size: cover;\r\n\tbackground-color: rgb(95, 94, 92);\r\n\tbox-shadow: 5px 5px 15px 5px #000000;\r\n\tpadding-bottom: 45px;\r\n}\r\n\r\n#form {\r\n\tposition: fixed; /* Sit on top of the page content */\r\n\tdisplay: flex; /* Hidden by default */\r\n\twidth: 100%; /* Full width (cover the whole page) */\r\n\theight: 100%; /* Full height (cover the whole page) */\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbackground-color: rgba(0, 0, 0, 0.85); /* Black background with opacity */\r\n\tz-index: 2; /* Specify a stack order in case you\'re using a different order for other elements */\r\n}\r\n\r\n#closed {\r\n\tposition: relative;\r\n\ttop: 7px;\r\n\tleft: 105px;\r\n\tright: 0;\r\n\tbottom: 0px;\r\n\theight: 25px;\r\n\tborder: 1px solid black;\r\n\tborder-radius: 0px;\r\n\tpadding-top: 2px;\r\n\tfont-weight: 600;\r\n\tborder-radius: 20px;\r\n\tbackground-color: rgb(241, 170, 170);\r\n\tscale: 0.9;\r\n}\r\n\r\n.dropdown {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.btn {\r\n\tbackground-image: url(.//img/pencil.png);\r\n\tbackground-size: contain;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center;\r\n\tcolor: #000000;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n\tscale: 0.75;\r\n\tborder-radius: 5px;\r\n\twidth: 50px;\r\n\theight: 30px;\r\n}\r\n\r\n.dropdown-content {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tright: 20px;\r\n\tbackground-color: #f9f9f9;\r\n\tmin-width: 120px;\r\n\tdisplay: none;\r\n\tbox-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n\tz-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n\tcolor: #333;\r\n\tpadding: 8px 16px;\r\n\tdisplay: block;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n\tdisplay: block;\r\n}\r\n\r\n/* CSS */\r\n.button-59 {\r\n\talign-items: center;\r\n\tbackground-color: #fff;\r\n\tborder: 2px solid #000;\r\n\tbox-sizing: border-box;\r\n\tcolor: #000;\r\n\tcursor: pointer;\r\n\tdisplay: inline-flex;\r\n\tfill: #000;\r\n\tfont-family: Inter, sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 600;\r\n\theight: 48px;\r\n\tjustify-content: center;\r\n\tletter-spacing: -0.8px;\r\n\tline-height: 24px;\r\n\tmin-width: 140px;\r\n\toutline: 0;\r\n\tpadding: 0 17px;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\ttransition: all 0.3s;\r\n\tuser-select: none;\r\n\t-webkit-user-select: none;\r\n\ttouch-action: manipulation;\r\n}\r\n\r\n.button-59:focus {\r\n\tcolor: #171e29;\r\n}\r\n\r\n.button-59:hover {\r\n\tborder-color: #06f;\r\n\tcolor: #06f;\r\n\tfill: #06f;\r\n}\r\n\r\n.button-59:active {\r\n\tborder-color: #06f;\r\n\tcolor: #06f;\r\n\tfill: #06f;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\t.button-59 {\r\n\t\tmin-width: 170px;\r\n\t}\r\n}\r\n'],sourceRoot:""}]);const c=s},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r="",e=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),e&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=n(t),e&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(n,r,e,o,A){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var C=0;C<n.length;C++){var s=[].concat(n[C]);e&&i[s[0]]||(void 0!==A&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=A),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var t=n[1],r=n[3];if(!r)return t;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),A="/*# ".concat(o," */");return[t].concat([A]).join("\n")}return[t].join("\n")}},379:n=>{var t=[];function r(n){for(var r=-1,e=0;e<t.length;e++)if(t[e].identifier===n){r=e;break}return r}function e(n,e){for(var A={},i=[],a=0;a<n.length;a++){var d=n[a],C=e.base?d[0]+e.base:d[0],s=A[C]||0,l="".concat(C," ").concat(s);A[C]=s+1;var c=r(l),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==c)t[c].references++,t[c].updater(p);else{var g=o(p,e);e.byIndex=a,t.splice(a,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function o(n,t){var r=t.domAPI(t);return r.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;r.update(n=t)}else r.remove()}}n.exports=function(n,o){var A=e(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<A.length;i++){var a=r(A[i]);t[a].references--}for(var d=e(n,o),C=0;C<A.length;C++){var s=r(A[C]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}A=d}}},569:n=>{var t={};n.exports=function(n,r){var e=function(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,r)=>{n.exports=function(n){var t=r.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(r){!function(n,t,r){var e="";r.supports&&(e+="@supports (".concat(r.supports,") {")),r.media&&(e+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(e+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),e+=r.css,o&&(e+="}"),r.media&&(e+="}"),r.supports&&(e+="}");var A=r.sourceMap;A&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),t.styleTagTransform(e,n,t.options)}(t,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},801:(n,t,r)=>{n.exports=r.p+"c4b0a302c1a24d5b2568.png"}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var A=t[e]={id:e,exports:{}};return n[e](A,A.exports,r),A.exports}r.m=n,r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var t=r.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var e=t.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{const n=function(){document.getElementById("popUpForm").remove()},t=function(){const t=document.getElementsByClassName("portfolioSide")[0],r=document.createElement("div");r.setAttribute("id","popUpForm"),r.innerHTML=' <div class="form-popup" id="form">\n    <form action="#" method="post" class="form-container" id="form1">\n      <button type="button" id="closed" ">X</button>\n      <div class="input">\n        <input\n          type="text"\n          name="symbol"\n          id="symbol"\n          placeholder="symbol"\n        />\n      </div>\n      <div class="input">\n        <input\n          type="text"\n          name="amount"\n          id="amount"\n          placeholder="Quantity"\n        />\n      </div>\n      <div class="input">\n        <input\n          type="number"\n          name="price"\n          id="price"\n          placeholder="price"\n        />\n      </div>\n      <button type="button" class="btn" id="submit">\n        Add coin\n      </button>\n    </form>\n  </div>',t.appendChild(r),document.getElementById("closed").addEventListener("click",(t=>{n()})),document.getElementById("submit").addEventListener("click",(t=>{holdings.push(function(){const n=document.getElementById("symbol").value.toUpperCase(),t=document.getElementById("price").value,r=document.getElementById("amount").value;return new class{constructor(n,t,r){this.symbol=n,this.price=t,this.amount=r}}(n,t,r)}()),function(){const n=document.getElementsByClassName("portfolioSide")[0],t=document.createElement("div"),r=document.getElementById("totalValue"),e=document.getElementById("trendAmount"),o=document.getElementById("trendingTriangle"),A=holdings.length-1;t.setAttribute("id",`${A}`),t.setAttribute("class","holdingCard"),t.innerHTML=`\n    <div class="join">\n\t\t<div class="symbol">${holdings[A].symbol}</div>\n\t\t<div class="value" id="value${A}"></div>\n\t</div>\n    <div class="amount">${C(holdings[A].amount)}</div>\n    <div class="pnl" id="pnl${A}"></div>\n\t<div class="price" id="price${A}"></div>\n\t<div class="dropdown">\n\t<button class="button-59" role="button">Button 59</button>\n  <div class="dropdown-content">\n    <button class="editButtons ${A}" id="buttonEdit${A}">Edit</a>\n    <button class="editButtons ${A}" id="buttonDelete${A}"Yeah>Delete</a>\n  </div>\n</div>\n\n\n\t\n    `,n.appendChild(t),async function(n){const t=await fetch("https://api.coingecko.com/api/v3/coins/list"),r=`https://api.coingecko.com/api/v3/coins/${(await t.json()).find((t=>t.symbol.toLowerCase()===n.toLowerCase())).id}`,e=await fetch(r),o=await e.json(),s=o.image.small;let p=o.market_data.current_price.usd;const g=o.market_data.price_change_24h,u=document.getElementById(`${A}`),B=document.createElement("img");B.setAttribute("src",`${s}`),u.prepend(B),p=p>5?p.toFixed(1):p.toFixed(4);const f=holdings[A].amount,m=p*f,b=m-holdings[A].price*f;total+=p*f,holdings[A].value=m,holdings[A].price_change=g*f,c(),i.textContent=`$${C(m.toFixed(1))}`,a.textContent=`$${C(b.toFixed(2))}`,d.textContent=`$${C(p)}`,b<0?a.setAttribute("class","loss"):(a.setAttribute("class","profit"),console.log(s,p,g),console.log,yesterdayTotal+=g*holdings[A].amount,l())}(`${holdings[A].symbol}`);const i=document.getElementById(`value${A}`),a=document.getElementById(`pnl${A}`),d=document.getElementById(`price${A}`);function C(n){return n<1&&n>0?n:n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const s=document.getElementsByClassName(`${A}`);function l(){let n=total+yesterdayTotal;if(0===yesterdayTotal)return e.textContent="",void(o.textContent="");if(yesterdayTotal<0){let t=(total-n)/total*100;return e.textContent=`-$${C(-1*yesterdayTotal.toFixed(0))} (${t.toFixed(2)}%)`,e.setAttribute("class","loss"),o.setAttribute("class","loss"),void(o.textContent="▼")}if(yesterdayTotal>0){let t=(n-total)/n*100;return e.textContent=`$${C(yesterdayTotal.toFixed(0))} (${t.toFixed(2)}%)`,e.setAttribute("class","profit"),o.setAttribute("class","profit"),void(o.textContent="▲")}}function c(){r.textContent=`$${C(total.toFixed(0))}`}Array.from(s).forEach((n=>n.addEventListener("click",(t=>{if(console.log(`${n.id} got clicked`),n.id.includes("Delete")){const t=n.id.slice(-1);!function(n){document.getElementById(`${n}`).remove()}(t),function(n){total-=holdings[n].value,yesterdayTotal-=holdings[n].price_change,c(),l(),delete holdings[n]}(t)}}))))}(),n()}))};var e=r(379),o=r.n(e),A=r(795),i=r.n(A),a=r(569),d=r.n(a),C=r(565),s=r.n(C),l=r(216),c=r.n(l),p=r(589),g=r.n(p),u=r(426),B={};B.styleTagTransform=g(),B.setAttributes=s(),B.insert=d().bind(null,"head"),B.domAPI=i(),B.insertStyleElement=c(),o()(u.Z,B),u.Z&&u.Z.locals&&u.Z.locals,document.getElementsByTagName("body")[0].innerHTML='<div id="grid-container">\n    <header></header>\n    <main></main>\n    <footer></footer>\n</div>',document.getElementsByTagName("header")[0].innerHTML='\t<div id="header-flex">\n\t<div class="joined">\n\t\t<div class="flex-left">\n\t\t\t<img id="logo" src="/repos/coinTrack/src/img/logo.svg" alt="#" />\n\t\t\t<h3>CoinTracker</h3>\n\t\t</div>\n\t\t<div class="buttonsLeft">\n\t\t\t<button id="portfolioButton" class="navButton">Portfolio</button>\n\t\t\t<button id="marketButton" class="navButton">Markets</button>\n\t\t\t<button id="newsButton" class="navButton">News</button>\n\t\t</div>\n\t</div>\n\t<div class="joined" id="navRight">\n\t\t<h4><a href="#">Sign up</a></h4>\n\t\t<h4><a href="#">Login</a></h4>\n\t</div>\n</div>\n\t',document.getElementsByTagName("main")[0].innerHTML='\t\t\t\t\t<div>left hand stuff</div>\n    <div class="portfolioSide">\n        <div class="mainTop">\n            <div class="topLeftSide">\n                <h1 id="totalValue">$0</h1>\n                <div id="trendingTriangle"></div>\n                <h4 id="trendAmount"></h4>\n            </div>\n            <button id="addHoldingButton">+</button>\n        </div>\n        <div class="dropdown">\n        <button class="button-59" role="button">Button 59</button>\n  <div class="dropdown-content">\n    <a href="#">Edit</a>\n    <a href="#">Delete</a>\n  </div>\n</div>\n\n    </div>',window.holdings=[],window.total=0,window.yesterdayTotal=0,document.getElementById("addHoldingButton").addEventListener("click",(n=>{t()}))})()})();
//# sourceMappingURL=bundle.js.map