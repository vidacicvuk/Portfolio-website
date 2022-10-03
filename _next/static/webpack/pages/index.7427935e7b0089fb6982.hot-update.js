self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
var projects = [{
  title: 'Social Network',
  description: "Social network app is the project codded with jQuery, html and css. Cookies and sessions are implemented using JS. Log in, sign up, post, like and comment functions are also implemented using JS and JQuery too and mockAPI as a database.",
  image: '/images/1.png',
  tags: ['jQuery', 'HTML', 'CSS', 'mockAPI'],
  source: 'https://github.com/vidacicvuk/Social-Network-App-HTML-CSS-JS-JQUERY-mockAPI',
  visit: '',
  video_demo: 'https://github.com/vidacicvuk/Social-Network-App-HTML-CSS-JS-JQUERY-mockAPI#readme',
  id: 0,
  video: '/images/1.mp4'
}, {
  title: 'Simon Game',
  description: "Simon Game, the application written with the HTML, CSS and jQuery. The Simon game is the exciting electronic game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order. It's fast-paced play, with lights and sounds that can challenge you.",
  image: '/images/2.png',
  tags: ['HTML', 'CSS', 'JavaScript'],
  source: 'https://github.com/vidacicvuk/Simon-Game-HTML-CSS-jQuery',
  visit: 'https://vidacicvuk.github.io/Simon-Game-HTML-CSS-jQuery/',
  video_demo: 'https://github.com/vidacicvuk/Simon-Game-HTML-CSS-jQuery#readme',
  id: 1,
  video: '/images/2.mp4'
}, {
  title: 'ToDo List',
  description: "ToDoList project is my introduction to mongoDB. It is application which will remember your ToDo things, you can add a new thing ToDo and when you check it, it will be removed from the list.",
  image: process.env.IMG + '/images/3.jpg',
  tags: ['JavaScript', 'mongoDB'],
  source: 'https://github.com/vidacicvuk/To-Do-List-Project',
  visit: '',
  video_demo: 'https://github.com/vidacicvuk/To-Do-List-Project#readme',
  id: 2,
  video: '/images/3.mp4'
}, {
  title: 'Blog Website',
  description: "The Blog Website is written with EJS, JS, HTML, and CSS, and the database is implemented using MongoDB.You can read all posts, if you have an authentication username and password you can add a new post and remove it.",
  image: process.env.IMG + '/images/4.jpg',
  tags: ['EJS', 'mongoDB'],
  source: 'https://github.com/vidacicvuk/Blog-Website-EJS',
  visit: '',
  video_demo: 'https://github.com/vidacicvuk/Blog-Website-EJS#readme',
  id: 3,
  video: '/images/4.mp4'
}, {
  title: 'Wiki-API-RESTful-API',
  description: "This application is small demonstration of knowledge of RESTfull APIs. Wiki-API is the server which will handle all your RESTfull API requests. Small database of 'articles' is implemented using mongoDB. With the RESTfull APIs you can add, modify, get and delete articles.",
  image: process.env.IMG + '/images/5.jpg',
  tags: ['JavaScript', 'RESTful API', 'mongoDB'],
  source: 'https://github.com/vidacicvuk/Wiki-API-RESTful-API',
  visit: '',
  video_demo: 'https://github.com/vidacicvuk/Wiki-API-RESTful-API#readme',
  id: 4,
  video: '/images/5.mp4'
}, {
  title: 'Secrets App',
  description: "'Secrets' is the social network where you can share anonymously your secret with other people and where you can read secrets from other people too. This project is developed with node.js, HTML and CSS. Accent in this project is on cookies which are implemented on the back-end side using 'passport', passwords of the users are hashed and log in/register with Google/Facebook is implemented too.",
  image: process.env.IMG + '/images/6.jpg',
  tags: ['EJS', 'JavaScript', 'mongoDB'],
  source: 'https://github.com/vidacicvuk/Secrets-Aplication',
  visit: '',
  video_demo: 'https://github.com/vidacicvuk/Secrets-Aplication#readme',
  id: 5,
  video: '/images/6.mp4'
}, {
  title: 'KeeperApp Motoko',
  description: "Keeper App is an application with the React frontend and the ICT as a backend. Backend is written using Motoko and this is my first web3 app. The application represents a blank board on which you can put your notes and remove them when you don't need them anymore.",
  image: process.env.IMG + '/images/7.jpg',
  tags: ['React', 'Motoko', 'Web3'],
  source: 'https://github.com/vidacicvuk/KeeperApp-React-Motoko',
  visit: '',
  video_demo: 'https://github.com/vidacicvuk/KeeperApp-React-Motoko#readme',
  id: 6,
  video: '/images/7.mp4'
}];
var TimeLineData = [{
  year: 2019,
  text: 'Started my journey'
}, {
  year: 2019,
  text: 'Bachelor with Honours in Electrical and Computer Engineering (B.Elec.Comp.Eng.)'
}, {
  year: 2019,
  text: 'Started to work in the automotive industry as a software engineer.'
}, {
  year: 2021,
  text: 'Master in Electrical and Computer Engineering (M.El.Comp.Eng.)'
}, {
  year: 2022,
  text: 'Started my freelance web2/web3 development journey.'
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJ2aWRlb19kZW1vIiwiaWQiLCJ2aWRlbyIsInByb2Nlc3MiLCJlbnYiLCJJTUciLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUFFLDhPQUZmO0FBR0lDLE9BQUssRUFBRSxlQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLEtBQW5CLEVBQTBCLFNBQTFCLENBSlY7QUFLRUMsUUFBTSxFQUFFLDZFQUxWO0FBTUVDLE9BQUssRUFBRSxFQU5UO0FBT0VDLFlBQVUsRUFBRSxvRkFQZDtBQVFFQyxJQUFFLEVBQUUsQ0FSTjtBQVNFQyxPQUFLLEVBQUU7QUFUVCxDQURzQixFQVl0QjtBQUNFUixPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQUMsd1RBRmQ7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFRLEtBQVIsRUFBZSxZQUFmLENBSlI7QUFLRUMsUUFBTSxFQUFFLDBEQUxWO0FBTUVDLE9BQUssRUFBRSwwREFOVDtBQU9FQyxZQUFVLEVBQUUsaUVBUGQ7QUFRRUMsSUFBRSxFQUFFLENBUk47QUFTRUMsT0FBSyxFQUFFO0FBVFQsQ0Fac0IsRUF1QnRCO0FBQ0VSLE9BQUssRUFBRSxXQURUO0FBRUVDLGFBQVcsRUFBRSwrTEFGZjtBQUdJQyxPQUFLLEVBQUVPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaLEdBQWdCLGVBSDNCO0FBSUlSLE1BQUksRUFBRSxDQUFDLFlBQUQsRUFBZSxTQUFmLENBSlY7QUFLRUMsUUFBTSxFQUFFLGtEQUxWO0FBTUVDLE9BQUssRUFBRSxFQU5UO0FBT0VDLFlBQVUsRUFBRSx5REFQZDtBQVFFQyxJQUFFLEVBQUUsQ0FSTjtBQVNFQyxPQUFLLEVBQUU7QUFUVCxDQXZCc0IsRUFrQ3RCO0FBQ0VSLE9BQUssRUFBRSxjQURUO0FBRUVDLGFBQVcsRUFBRSwwTkFGZjtBQUdFQyxPQUFLLEVBQUVPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaLEdBQWdCLGVBSHpCO0FBSUVSLE1BQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxTQUFSLENBSlI7QUFLRUMsUUFBTSxFQUFFLGdEQUxWO0FBTUVDLE9BQUssRUFBRSxFQU5UO0FBT0VDLFlBQVUsRUFBRSx1REFQZDtBQVFFQyxJQUFFLEVBQUUsQ0FSTjtBQVNFQyxPQUFLLEVBQUU7QUFUVCxDQWxDc0IsRUE2Q3RCO0FBQ0VSLE9BQUssRUFBRSxzQkFEVDtBQUVFQyxhQUFXLEVBQUUsaVJBRmY7QUFHRUMsT0FBSyxFQUFFTyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWixHQUFnQixlQUh6QjtBQUlFUixNQUFJLEVBQUUsQ0FBQyxZQUFELEVBQWUsYUFBZixFQUE2QixTQUE3QixDQUpSO0FBS0VDLFFBQU0sRUFBRSxvREFMVjtBQU1FQyxPQUFLLEVBQUUsRUFOVDtBQU9FQyxZQUFVLEVBQUUsMkRBUGQ7QUFRRUMsSUFBRSxFQUFFLENBUk47QUFTRUMsT0FBSyxFQUFFO0FBVFQsQ0E3Q3NCLEVBd0R0QjtBQUNFUixPQUFLLEVBQUUsYUFEVDtBQUVFQyxhQUFXLEVBQUUsNFlBRmY7QUFHRUMsT0FBSyxFQUFFTyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWixHQUFnQixlQUh6QjtBQUlFUixNQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFxQixTQUFyQixDQUpSO0FBS0VDLFFBQU0sRUFBRSxrREFMVjtBQU1FQyxPQUFLLEVBQUUsRUFOVDtBQU9FQyxZQUFVLEVBQUUseURBUGQ7QUFRRUMsSUFBRSxFQUFFLENBUk47QUFTRUMsT0FBSyxFQUFFO0FBVFQsQ0F4RHNCLEVBbUV0QjtBQUNFUixPQUFLLEVBQUUsa0JBRFQ7QUFFRUMsYUFBVyxFQUFFLDBRQUZmO0FBR0VDLE9BQUssRUFBRU8sT0FBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVosR0FBZ0IsZUFIekI7QUFJRVIsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBbUIsTUFBbkIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsc0RBTFY7QUFNRUMsT0FBSyxFQUFFLEVBTlQ7QUFPRUMsWUFBVSxFQUFFLDZEQVBkO0FBUUVDLElBQUUsRUFBRSxDQVJOO0FBU0VDLE9BQUssRUFBRTtBQVRULENBbkVzQixDQUFqQjtBQWdGQSxJQUFNSSxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NDI3OTM1ZTdiMDA4OWZiNjk4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdTb2NpYWwgTmV0d29yaycsXG4gICAgZGVzY3JpcHRpb246IFwiU29jaWFsIG5ldHdvcmsgYXBwIGlzIHRoZSBwcm9qZWN0IGNvZGRlZCB3aXRoIGpRdWVyeSwgaHRtbCBhbmQgY3NzLiBDb29raWVzIGFuZCBzZXNzaW9ucyBhcmUgaW1wbGVtZW50ZWQgdXNpbmcgSlMuIExvZyBpbiwgc2lnbiB1cCwgcG9zdCwgbGlrZSBhbmQgY29tbWVudCBmdW5jdGlvbnMgYXJlIGFsc28gaW1wbGVtZW50ZWQgdXNpbmcgSlMgYW5kIEpRdWVyeSB0b28gYW5kIG1vY2tBUEkgYXMgYSBkYXRhYmFzZS5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy8xLnBuZycsXG4gICAgICB0YWdzOiBbJ2pRdWVyeScsICdIVE1MJywgJ0NTUycsICdtb2NrQVBJJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvU29jaWFsLU5ldHdvcmstQXBwLUhUTUwtQ1NTLUpTLUpRVUVSWS1tb2NrQVBJJyxcbiAgICB2aXNpdDogJycsXG4gICAgdmlkZW9fZGVtbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWRhY2ljdnVrL1NvY2lhbC1OZXR3b3JrLUFwcC1IVE1MLUNTUy1KUy1KUVVFUlktbW9ja0FQSSNyZWFkbWUnLFxuICAgIGlkOiAwLFxuICAgIHZpZGVvOiAnL2ltYWdlcy8xLm1wNCcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NpbW9uIEdhbWUnLFxuICAgIGRlc2NyaXB0aW9uOlwiU2ltb24gR2FtZSwgdGhlIGFwcGxpY2F0aW9uIHdyaXR0ZW4gd2l0aCB0aGUgSFRNTCwgQ1NTIGFuZCBqUXVlcnkuIFRoZSBTaW1vbiBnYW1lIGlzIHRoZSBleGNpdGluZyBlbGVjdHJvbmljIGdhbWUgb2YgbGlnaHRzIGFuZCBzb3VuZHMgaW4gd2hpY2ggcGxheWVycyBtdXN0IHJlcGVhdCByYW5kb20gc2VxdWVuY2VzIG9mIGxpZ2h0cyBieSBwcmVzc2luZyB0aGUgY29sb3JlZCBwYWRzIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJdCdzIGZhc3QtcGFjZWQgcGxheSwgd2l0aCBsaWdodHMgYW5kIHNvdW5kcyB0aGF0IGNhbiBjaGFsbGVuZ2UgeW91LlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy8yLnBuZycsXG4gICAgdGFnczogWydIVE1MJywnQ1NTJywgJ0phdmFTY3JpcHQnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vdmlkYWNpY3Z1ay9TaW1vbi1HYW1lLUhUTUwtQ1NTLWpRdWVyeScsXG4gICAgdmlzaXQ6ICdodHRwczovL3ZpZGFjaWN2dWsuZ2l0aHViLmlvL1NpbW9uLUdhbWUtSFRNTC1DU1MtalF1ZXJ5LycsXG4gICAgdmlkZW9fZGVtbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWRhY2ljdnVrL1NpbW9uLUdhbWUtSFRNTC1DU1MtalF1ZXJ5I3JlYWRtZScsXG4gICAgaWQ6IDEsXG4gICAgdmlkZW86ICcvaW1hZ2VzLzIubXA0JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVG9EbyBMaXN0JyxcbiAgICBkZXNjcmlwdGlvbjogXCJUb0RvTGlzdCBwcm9qZWN0IGlzIG15IGludHJvZHVjdGlvbiB0byBtb25nb0RCLiBJdCBpcyBhcHBsaWNhdGlvbiB3aGljaCB3aWxsIHJlbWVtYmVyIHlvdXIgVG9EbyB0aGluZ3MsIHlvdSBjYW4gYWRkIGEgbmV3IHRoaW5nIFRvRG8gYW5kIHdoZW4geW91IGNoZWNrIGl0LCBpdCB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgbGlzdC5cIixcbiAgICAgIGltYWdlOiBwcm9jZXNzLmVudi5JTUcrJy9pbWFnZXMvMy5qcGcnLFxuICAgICAgdGFnczogWydKYXZhU2NyaXB0JywgJ21vbmdvREInXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vdmlkYWNpY3Z1ay9Uby1Eby1MaXN0LVByb2plY3QnLFxuICAgIHZpc2l0OiAnJyxcbiAgICB2aWRlb19kZW1vOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvVG8tRG8tTGlzdC1Qcm9qZWN0I3JlYWRtZScsXG4gICAgaWQ6IDIsXG4gICAgdmlkZW86ICcvaW1hZ2VzLzMubXA0JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQmxvZyBXZWJzaXRlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgQmxvZyBXZWJzaXRlIGlzIHdyaXR0ZW4gd2l0aCBFSlMsIEpTLCBIVE1MLCBhbmQgQ1NTLCBhbmQgdGhlIGRhdGFiYXNlIGlzIGltcGxlbWVudGVkIHVzaW5nIE1vbmdvREIuWW91IGNhbiByZWFkIGFsbCBwb3N0cywgaWYgeW91IGhhdmUgYW4gYXV0aGVudGljYXRpb24gdXNlcm5hbWUgYW5kIHBhc3N3b3JkIHlvdSBjYW4gYWRkIGEgbmV3IHBvc3QgYW5kIHJlbW92ZSBpdC5cIixcbiAgICBpbWFnZTogcHJvY2Vzcy5lbnYuSU1HKycvaW1hZ2VzLzQuanBnJyxcbiAgICB0YWdzOiBbJ0VKUycsICdtb25nb0RCJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvQmxvZy1XZWJzaXRlLUVKUycsXG4gICAgdmlzaXQ6ICcnLFxuICAgIHZpZGVvX2RlbW86ICdodHRwczovL2dpdGh1Yi5jb20vdmlkYWNpY3Z1ay9CbG9nLVdlYnNpdGUtRUpTI3JlYWRtZScsXG4gICAgaWQ6IDMsXG4gICAgdmlkZW86ICcvaW1hZ2VzLzQubXA0JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnV2lraS1BUEktUkVTVGZ1bC1BUEknLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwbGljYXRpb24gaXMgc21hbGwgZGVtb25zdHJhdGlvbiBvZiBrbm93bGVkZ2Ugb2YgUkVTVGZ1bGwgQVBJcy4gV2lraS1BUEkgaXMgdGhlIHNlcnZlciB3aGljaCB3aWxsIGhhbmRsZSBhbGwgeW91ciBSRVNUZnVsbCBBUEkgcmVxdWVzdHMuIFNtYWxsIGRhdGFiYXNlIG9mICdhcnRpY2xlcycgaXMgaW1wbGVtZW50ZWQgdXNpbmcgbW9uZ29EQi4gV2l0aCB0aGUgUkVTVGZ1bGwgQVBJcyB5b3UgY2FuIGFkZCwgbW9kaWZ5LCBnZXQgYW5kIGRlbGV0ZSBhcnRpY2xlcy5cIixcbiAgICBpbWFnZTogcHJvY2Vzcy5lbnYuSU1HKycvaW1hZ2VzLzUuanBnJyxcbiAgICB0YWdzOiBbJ0phdmFTY3JpcHQnLCAnUkVTVGZ1bCBBUEknLCdtb25nb0RCJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvV2lraS1BUEktUkVTVGZ1bC1BUEknLFxuICAgIHZpc2l0OiAnJyxcbiAgICB2aWRlb19kZW1vOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvV2lraS1BUEktUkVTVGZ1bC1BUEkjcmVhZG1lJyxcbiAgICBpZDogNCxcbiAgICB2aWRlbzogJy9pbWFnZXMvNS5tcDQnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTZWNyZXRzIEFwcCcsXG4gICAgZGVzY3JpcHRpb246IFwiJ1NlY3JldHMnIGlzIHRoZSBzb2NpYWwgbmV0d29yayB3aGVyZSB5b3UgY2FuIHNoYXJlIGFub255bW91c2x5IHlvdXIgc2VjcmV0IHdpdGggb3RoZXIgcGVvcGxlIGFuZCB3aGVyZSB5b3UgY2FuIHJlYWQgc2VjcmV0cyBmcm9tIG90aGVyIHBlb3BsZSB0b28uIFRoaXMgcHJvamVjdCBpcyBkZXZlbG9wZWQgd2l0aCBub2RlLmpzLCBIVE1MIGFuZCBDU1MuIEFjY2VudCBpbiB0aGlzIHByb2plY3QgaXMgb24gY29va2llcyB3aGljaCBhcmUgaW1wbGVtZW50ZWQgb24gdGhlIGJhY2stZW5kIHNpZGUgdXNpbmcgJ3Bhc3Nwb3J0JywgcGFzc3dvcmRzIG9mIHRoZSB1c2VycyBhcmUgaGFzaGVkIGFuZCBsb2cgaW4vcmVnaXN0ZXIgd2l0aCBHb29nbGUvRmFjZWJvb2sgaXMgaW1wbGVtZW50ZWQgdG9vLlwiLFxuICAgIGltYWdlOiBwcm9jZXNzLmVudi5JTUcrJy9pbWFnZXMvNi5qcGcnLFxuICAgIHRhZ3M6IFsnRUpTJywgJ0phdmFTY3JpcHQnLCdtb25nb0RCJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvU2VjcmV0cy1BcGxpY2F0aW9uJyxcbiAgICB2aXNpdDogJycsXG4gICAgdmlkZW9fZGVtbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWRhY2ljdnVrL1NlY3JldHMtQXBsaWNhdGlvbiNyZWFkbWUnLFxuICAgIGlkOiA1LFxuICAgIHZpZGVvOiAnL2ltYWdlcy82Lm1wNCcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0tlZXBlckFwcCBNb3Rva28nLFxuICAgIGRlc2NyaXB0aW9uOiBcIktlZXBlciBBcHAgaXMgYW4gYXBwbGljYXRpb24gd2l0aCB0aGUgUmVhY3QgZnJvbnRlbmQgYW5kIHRoZSBJQ1QgYXMgYSBiYWNrZW5kLiBCYWNrZW5kIGlzIHdyaXR0ZW4gdXNpbmcgTW90b2tvIGFuZCB0aGlzIGlzIG15IGZpcnN0IHdlYjMgYXBwLiBUaGUgYXBwbGljYXRpb24gcmVwcmVzZW50cyBhIGJsYW5rIGJvYXJkIG9uIHdoaWNoIHlvdSBjYW4gcHV0IHlvdXIgbm90ZXMgYW5kIHJlbW92ZSB0aGVtIHdoZW4geW91IGRvbid0IG5lZWQgdGhlbSBhbnltb3JlLlwiLFxuICAgIGltYWdlOiBwcm9jZXNzLmVudi5JTUcrJy9pbWFnZXMvNy5qcGcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnTW90b2tvJywnV2ViMyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWRhY2ljdnVrL0tlZXBlckFwcC1SZWFjdC1Nb3Rva28nLFxuICAgIHZpc2l0OiAnJyxcbiAgICB2aWRlb19kZW1vOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvS2VlcGVyQXBwLVJlYWN0LU1vdG9rbyNyZWFkbWUnLFxuICAgIGlkOiA2LFxuICAgIHZpZGVvOiAnL2ltYWdlcy83Lm1wNCcsXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ1N0YXJ0ZWQgbXkgam91cm5leScsIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0JhY2hlbG9yIHdpdGggSG9ub3VycyBpbiBFbGVjdHJpY2FsIGFuZCBDb21wdXRlciBFbmdpbmVlcmluZyAoQi5FbGVjLkNvbXAuRW5nLiknLCB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdTdGFydGVkIHRvIHdvcmsgaW4gdGhlIGF1dG9tb3RpdmUgaW5kdXN0cnkgYXMgYSBzb2Z0d2FyZSBlbmdpbmVlci4nLCB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdNYXN0ZXIgaW4gRWxlY3RyaWNhbCBhbmQgQ29tcHV0ZXIgRW5naW5lZXJpbmcgKE0uRWwuQ29tcC5FbmcuKScsIH0sXG4gIHsgeWVhcjogMjAyMiwgdGV4dDogJ1N0YXJ0ZWQgbXkgZnJlZWxhbmNlIHdlYjIvd2ViMyBkZXZlbG9wbWVudCBqb3VybmV5LicsIH0sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=