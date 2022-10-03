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
  image: '/images/3.jpg',
  tags: ['JavaScript', 'mongoDB'],
  source: 'https://github.com/vidacicvuk/To-Do-List-Project',
  visit: '',
  video_demo: 'https://github.com/vidacicvuk/To-Do-List-Project#readme',
  id: 2,
  video: '/images/3.mp4'
}, {
  title: 'Blog Website',
  description: "The Blog Website is written with EJS, JS, HTML, and CSS, and the database is implemented using MongoDB.You can read all posts, if you have an authentication username and password you can add a new post and remove it.",
  image: '/images/4.jpg',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJ2aWRlb19kZW1vIiwiaWQiLCJ2aWRlbyIsInByb2Nlc3MiLCJlbnYiLCJJTUciLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUFFLDhPQUZmO0FBR0lDLE9BQUssRUFBRSxlQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLEtBQW5CLEVBQTBCLFNBQTFCLENBSlY7QUFLRUMsUUFBTSxFQUFFLDZFQUxWO0FBTUVDLE9BQUssRUFBRSxFQU5UO0FBT0VDLFlBQVUsRUFBRSxvRkFQZDtBQVFFQyxJQUFFLEVBQUUsQ0FSTjtBQVNFQyxPQUFLLEVBQUU7QUFUVCxDQURzQixFQVl0QjtBQUNFUixPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQUMsd1RBRmQ7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFRLEtBQVIsRUFBZSxZQUFmLENBSlI7QUFLRUMsUUFBTSxFQUFFLDBEQUxWO0FBTUVDLE9BQUssRUFBRSwwREFOVDtBQU9FQyxZQUFVLEVBQUUsaUVBUGQ7QUFRRUMsSUFBRSxFQUFFLENBUk47QUFTRUMsT0FBSyxFQUFFO0FBVFQsQ0Fac0IsRUF1QnRCO0FBQ0VSLE9BQUssRUFBRSxXQURUO0FBRUVDLGFBQVcsRUFBRSwrTEFGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxZQUFELEVBQWUsU0FBZixDQUpWO0FBS0VDLFFBQU0sRUFBRSxrREFMVjtBQU1FQyxPQUFLLEVBQUUsRUFOVDtBQU9FQyxZQUFVLEVBQUUseURBUGQ7QUFRRUMsSUFBRSxFQUFFLENBUk47QUFTRUMsT0FBSyxFQUFFO0FBVFQsQ0F2QnNCLEVBa0N0QjtBQUNFUixPQUFLLEVBQUUsY0FEVDtBQUVFQyxhQUFXLEVBQUUsME5BRmY7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLFNBQVIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsZ0RBTFY7QUFNRUMsT0FBSyxFQUFFLEVBTlQ7QUFPRUMsWUFBVSxFQUFFLHVEQVBkO0FBUUVDLElBQUUsRUFBRSxDQVJOO0FBU0VDLE9BQUssRUFBRTtBQVRULENBbENzQixFQTZDdEI7QUFDRVIsT0FBSyxFQUFFLHNCQURUO0FBRUVDLGFBQVcsRUFBRSxpUkFGZjtBQUdFQyxPQUFLLEVBQUVPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaLEdBQWdCLGVBSHpCO0FBSUVSLE1BQUksRUFBRSxDQUFDLFlBQUQsRUFBZSxhQUFmLEVBQTZCLFNBQTdCLENBSlI7QUFLRUMsUUFBTSxFQUFFLG9EQUxWO0FBTUVDLE9BQUssRUFBRSxFQU5UO0FBT0VDLFlBQVUsRUFBRSwyREFQZDtBQVFFQyxJQUFFLEVBQUUsQ0FSTjtBQVNFQyxPQUFLLEVBQUU7QUFUVCxDQTdDc0IsRUF3RHRCO0FBQ0VSLE9BQUssRUFBRSxhQURUO0FBRUVDLGFBQVcsRUFBRSw0WUFGZjtBQUdFQyxPQUFLLEVBQUVPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaLEdBQWdCLGVBSHpCO0FBSUVSLE1BQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxZQUFSLEVBQXFCLFNBQXJCLENBSlI7QUFLRUMsUUFBTSxFQUFFLGtEQUxWO0FBTUVDLE9BQUssRUFBRSxFQU5UO0FBT0VDLFlBQVUsRUFBRSx5REFQZDtBQVFFQyxJQUFFLEVBQUUsQ0FSTjtBQVNFQyxPQUFLLEVBQUU7QUFUVCxDQXhEc0IsRUFtRXRCO0FBQ0VSLE9BQUssRUFBRSxrQkFEVDtBQUVFQyxhQUFXLEVBQUUsMFFBRmY7QUFHRUMsT0FBSyxFQUFFTyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWixHQUFnQixlQUh6QjtBQUlFUixNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFtQixNQUFuQixDQUpSO0FBS0VDLFFBQU0sRUFBRSxzREFMVjtBQU1FQyxPQUFLLEVBQUUsRUFOVDtBQU9FQyxZQUFVLEVBQUUsNkRBUGQ7QUFRRUMsSUFBRSxFQUFFLENBUk47QUFTRUMsT0FBSyxFQUFFO0FBVFQsQ0FuRXNCLENBQWpCO0FBZ0ZBLElBQU1JLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsRUFLMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBTDBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYxNDZlNTc2NjE4NmNiYjYwYzNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ1NvY2lhbCBOZXR3b3JrJyxcbiAgICBkZXNjcmlwdGlvbjogXCJTb2NpYWwgbmV0d29yayBhcHAgaXMgdGhlIHByb2plY3QgY29kZGVkIHdpdGggalF1ZXJ5LCBodG1sIGFuZCBjc3MuIENvb2tpZXMgYW5kIHNlc3Npb25zIGFyZSBpbXBsZW1lbnRlZCB1c2luZyBKUy4gTG9nIGluLCBzaWduIHVwLCBwb3N0LCBsaWtlIGFuZCBjb21tZW50IGZ1bmN0aW9ucyBhcmUgYWxzbyBpbXBsZW1lbnRlZCB1c2luZyBKUyBhbmQgSlF1ZXJ5IHRvbyBhbmQgbW9ja0FQSSBhcyBhIGRhdGFiYXNlLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzEucG5nJyxcbiAgICAgIHRhZ3M6IFsnalF1ZXJ5JywgJ0hUTUwnLCAnQ1NTJywgJ21vY2tBUEknXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vdmlkYWNpY3Z1ay9Tb2NpYWwtTmV0d29yay1BcHAtSFRNTC1DU1MtSlMtSlFVRVJZLW1vY2tBUEknLFxuICAgIHZpc2l0OiAnJyxcbiAgICB2aWRlb19kZW1vOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvU29jaWFsLU5ldHdvcmstQXBwLUhUTUwtQ1NTLUpTLUpRVUVSWS1tb2NrQVBJI3JlYWRtZScsXG4gICAgaWQ6IDAsXG4gICAgdmlkZW86ICcvaW1hZ2VzLzEubXA0JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU2ltb24gR2FtZScsXG4gICAgZGVzY3JpcHRpb246XCJTaW1vbiBHYW1lLCB0aGUgYXBwbGljYXRpb24gd3JpdHRlbiB3aXRoIHRoZSBIVE1MLCBDU1MgYW5kIGpRdWVyeS4gVGhlIFNpbW9uIGdhbWUgaXMgdGhlIGV4Y2l0aW5nIGVsZWN0cm9uaWMgZ2FtZSBvZiBsaWdodHMgYW5kIHNvdW5kcyBpbiB3aGljaCBwbGF5ZXJzIG11c3QgcmVwZWF0IHJhbmRvbSBzZXF1ZW5jZXMgb2YgbGlnaHRzIGJ5IHByZXNzaW5nIHRoZSBjb2xvcmVkIHBhZHMgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIEl0J3MgZmFzdC1wYWNlZCBwbGF5LCB3aXRoIGxpZ2h0cyBhbmQgc291bmRzIHRoYXQgY2FuIGNoYWxsZW5nZSB5b3UuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzIucG5nJyxcbiAgICB0YWdzOiBbJ0hUTUwnLCdDU1MnLCAnSmF2YVNjcmlwdCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWRhY2ljdnVrL1NpbW9uLUdhbWUtSFRNTC1DU1MtalF1ZXJ5JyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vdmlkYWNpY3Z1ay5naXRodWIuaW8vU2ltb24tR2FtZS1IVE1MLUNTUy1qUXVlcnkvJyxcbiAgICB2aWRlb19kZW1vOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvU2ltb24tR2FtZS1IVE1MLUNTUy1qUXVlcnkjcmVhZG1lJyxcbiAgICBpZDogMSxcbiAgICB2aWRlbzogJy9pbWFnZXMvMi5tcDQnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUb0RvIExpc3QnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRvRG9MaXN0IHByb2plY3QgaXMgbXkgaW50cm9kdWN0aW9uIHRvIG1vbmdvREIuIEl0IGlzIGFwcGxpY2F0aW9uIHdoaWNoIHdpbGwgcmVtZW1iZXIgeW91ciBUb0RvIHRoaW5ncywgeW91IGNhbiBhZGQgYSBuZXcgdGhpbmcgVG9EbyBhbmQgd2hlbiB5b3UgY2hlY2sgaXQsIGl0IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBsaXN0LlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzMuanBnJyxcbiAgICAgIHRhZ3M6IFsnSmF2YVNjcmlwdCcsICdtb25nb0RCJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvVG8tRG8tTGlzdC1Qcm9qZWN0JyxcbiAgICB2aXNpdDogJycsXG4gICAgdmlkZW9fZGVtbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWRhY2ljdnVrL1RvLURvLUxpc3QtUHJvamVjdCNyZWFkbWUnLFxuICAgIGlkOiAyLFxuICAgIHZpZGVvOiAnL2ltYWdlcy8zLm1wNCcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0Jsb2cgV2Vic2l0ZScsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIEJsb2cgV2Vic2l0ZSBpcyB3cml0dGVuIHdpdGggRUpTLCBKUywgSFRNTCwgYW5kIENTUywgYW5kIHRoZSBkYXRhYmFzZSBpcyBpbXBsZW1lbnRlZCB1c2luZyBNb25nb0RCLllvdSBjYW4gcmVhZCBhbGwgcG9zdHMsIGlmIHlvdSBoYXZlIGFuIGF1dGhlbnRpY2F0aW9uIHVzZXJuYW1lIGFuZCBwYXNzd29yZCB5b3UgY2FuIGFkZCBhIG5ldyBwb3N0IGFuZCByZW1vdmUgaXQuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzQuanBnJyxcbiAgICB0YWdzOiBbJ0VKUycsICdtb25nb0RCJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvQmxvZy1XZWJzaXRlLUVKUycsXG4gICAgdmlzaXQ6ICcnLFxuICAgIHZpZGVvX2RlbW86ICdodHRwczovL2dpdGh1Yi5jb20vdmlkYWNpY3Z1ay9CbG9nLVdlYnNpdGUtRUpTI3JlYWRtZScsXG4gICAgaWQ6IDMsXG4gICAgdmlkZW86ICcvaW1hZ2VzLzQubXA0JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnV2lraS1BUEktUkVTVGZ1bC1BUEknLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwbGljYXRpb24gaXMgc21hbGwgZGVtb25zdHJhdGlvbiBvZiBrbm93bGVkZ2Ugb2YgUkVTVGZ1bGwgQVBJcy4gV2lraS1BUEkgaXMgdGhlIHNlcnZlciB3aGljaCB3aWxsIGhhbmRsZSBhbGwgeW91ciBSRVNUZnVsbCBBUEkgcmVxdWVzdHMuIFNtYWxsIGRhdGFiYXNlIG9mICdhcnRpY2xlcycgaXMgaW1wbGVtZW50ZWQgdXNpbmcgbW9uZ29EQi4gV2l0aCB0aGUgUkVTVGZ1bGwgQVBJcyB5b3UgY2FuIGFkZCwgbW9kaWZ5LCBnZXQgYW5kIGRlbGV0ZSBhcnRpY2xlcy5cIixcbiAgICBpbWFnZTogcHJvY2Vzcy5lbnYuSU1HKycvaW1hZ2VzLzUuanBnJyxcbiAgICB0YWdzOiBbJ0phdmFTY3JpcHQnLCAnUkVTVGZ1bCBBUEknLCdtb25nb0RCJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvV2lraS1BUEktUkVTVGZ1bC1BUEknLFxuICAgIHZpc2l0OiAnJyxcbiAgICB2aWRlb19kZW1vOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvV2lraS1BUEktUkVTVGZ1bC1BUEkjcmVhZG1lJyxcbiAgICBpZDogNCxcbiAgICB2aWRlbzogJy9pbWFnZXMvNS5tcDQnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTZWNyZXRzIEFwcCcsXG4gICAgZGVzY3JpcHRpb246IFwiJ1NlY3JldHMnIGlzIHRoZSBzb2NpYWwgbmV0d29yayB3aGVyZSB5b3UgY2FuIHNoYXJlIGFub255bW91c2x5IHlvdXIgc2VjcmV0IHdpdGggb3RoZXIgcGVvcGxlIGFuZCB3aGVyZSB5b3UgY2FuIHJlYWQgc2VjcmV0cyBmcm9tIG90aGVyIHBlb3BsZSB0b28uIFRoaXMgcHJvamVjdCBpcyBkZXZlbG9wZWQgd2l0aCBub2RlLmpzLCBIVE1MIGFuZCBDU1MuIEFjY2VudCBpbiB0aGlzIHByb2plY3QgaXMgb24gY29va2llcyB3aGljaCBhcmUgaW1wbGVtZW50ZWQgb24gdGhlIGJhY2stZW5kIHNpZGUgdXNpbmcgJ3Bhc3Nwb3J0JywgcGFzc3dvcmRzIG9mIHRoZSB1c2VycyBhcmUgaGFzaGVkIGFuZCBsb2cgaW4vcmVnaXN0ZXIgd2l0aCBHb29nbGUvRmFjZWJvb2sgaXMgaW1wbGVtZW50ZWQgdG9vLlwiLFxuICAgIGltYWdlOiBwcm9jZXNzLmVudi5JTUcrJy9pbWFnZXMvNi5qcGcnLFxuICAgIHRhZ3M6IFsnRUpTJywgJ0phdmFTY3JpcHQnLCdtb25nb0RCJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvU2VjcmV0cy1BcGxpY2F0aW9uJyxcbiAgICB2aXNpdDogJycsXG4gICAgdmlkZW9fZGVtbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWRhY2ljdnVrL1NlY3JldHMtQXBsaWNhdGlvbiNyZWFkbWUnLFxuICAgIGlkOiA1LFxuICAgIHZpZGVvOiAnL2ltYWdlcy82Lm1wNCcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0tlZXBlckFwcCBNb3Rva28nLFxuICAgIGRlc2NyaXB0aW9uOiBcIktlZXBlciBBcHAgaXMgYW4gYXBwbGljYXRpb24gd2l0aCB0aGUgUmVhY3QgZnJvbnRlbmQgYW5kIHRoZSBJQ1QgYXMgYSBiYWNrZW5kLiBCYWNrZW5kIGlzIHdyaXR0ZW4gdXNpbmcgTW90b2tvIGFuZCB0aGlzIGlzIG15IGZpcnN0IHdlYjMgYXBwLiBUaGUgYXBwbGljYXRpb24gcmVwcmVzZW50cyBhIGJsYW5rIGJvYXJkIG9uIHdoaWNoIHlvdSBjYW4gcHV0IHlvdXIgbm90ZXMgYW5kIHJlbW92ZSB0aGVtIHdoZW4geW91IGRvbid0IG5lZWQgdGhlbSBhbnltb3JlLlwiLFxuICAgIGltYWdlOiBwcm9jZXNzLmVudi5JTUcrJy9pbWFnZXMvNy5qcGcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnTW90b2tvJywnV2ViMyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWRhY2ljdnVrL0tlZXBlckFwcC1SZWFjdC1Nb3Rva28nLFxuICAgIHZpc2l0OiAnJyxcbiAgICB2aWRlb19kZW1vOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvS2VlcGVyQXBwLVJlYWN0LU1vdG9rbyNyZWFkbWUnLFxuICAgIGlkOiA2LFxuICAgIHZpZGVvOiAnL2ltYWdlcy83Lm1wNCcsXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ1N0YXJ0ZWQgbXkgam91cm5leScsIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0JhY2hlbG9yIHdpdGggSG9ub3VycyBpbiBFbGVjdHJpY2FsIGFuZCBDb21wdXRlciBFbmdpbmVlcmluZyAoQi5FbGVjLkNvbXAuRW5nLiknLCB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdTdGFydGVkIHRvIHdvcmsgaW4gdGhlIGF1dG9tb3RpdmUgaW5kdXN0cnkgYXMgYSBzb2Z0d2FyZSBlbmdpbmVlci4nLCB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdNYXN0ZXIgaW4gRWxlY3RyaWNhbCBhbmQgQ29tcHV0ZXIgRW5naW5lZXJpbmcgKE0uRWwuQ29tcC5FbmcuKScsIH0sXG4gIHsgeWVhcjogMjAyMiwgdGV4dDogJ1N0YXJ0ZWQgbXkgZnJlZWxhbmNlIHdlYjIvd2ViMyBkZXZlbG9wbWVudCBqb3VybmV5LicsIH0sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=