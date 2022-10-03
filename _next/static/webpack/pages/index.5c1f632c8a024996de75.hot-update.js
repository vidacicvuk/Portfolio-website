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
  video: process.env.IMG + '/images/6.mp4'
}, {
  title: 'KeeperApp Motoko',
  description: "Keeper App is an application with the React frontend and the ICT as a backend. Backend is written using Motoko and this is my first web3 app. The application represents a blank board on which you can put your notes and remove them when you don't need them anymore.",
  image: process.env.IMG + '/images/7.jpg',
  tags: ['React', 'Motoko', 'Web3'],
  source: 'https://github.com/vidacicvuk/KeeperApp-React-Motoko',
  visit: '',
  video_demo: 'https://github.com/vidacicvuk/KeeperApp-React-Motoko#readme',
  id: 6,
  video: process.env.IMG + '/images/7.mp4'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJ2aWRlb19kZW1vIiwiaWQiLCJ2aWRlbyIsInByb2Nlc3MiLCJlbnYiLCJJTUciLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUFFLDhPQUZmO0FBR0lDLE9BQUssRUFBRSxlQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLEtBQW5CLEVBQTBCLFNBQTFCLENBSlY7QUFLRUMsUUFBTSxFQUFFLDZFQUxWO0FBTUVDLE9BQUssRUFBRSxFQU5UO0FBT0VDLFlBQVUsRUFBRSxvRkFQZDtBQVFFQyxJQUFFLEVBQUUsQ0FSTjtBQVNFQyxPQUFLLEVBQUU7QUFUVCxDQURzQixFQVl0QjtBQUNFUixPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQUMsd1RBRmQ7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFRLEtBQVIsRUFBZSxZQUFmLENBSlI7QUFLRUMsUUFBTSxFQUFFLDBEQUxWO0FBTUVDLE9BQUssRUFBRSwwREFOVDtBQU9FQyxZQUFVLEVBQUUsaUVBUGQ7QUFRRUMsSUFBRSxFQUFFLENBUk47QUFTRUMsT0FBSyxFQUFFO0FBVFQsQ0Fac0IsRUF1QnRCO0FBQ0VSLE9BQUssRUFBRSxXQURUO0FBRUVDLGFBQVcsRUFBRSwrTEFGZjtBQUdJQyxPQUFLLEVBQUVPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaLEdBQWdCLGVBSDNCO0FBSUlSLE1BQUksRUFBRSxDQUFDLFlBQUQsRUFBZSxTQUFmLENBSlY7QUFLRUMsUUFBTSxFQUFFLGtEQUxWO0FBTUVDLE9BQUssRUFBRSxFQU5UO0FBT0VDLFlBQVUsRUFBRSx5REFQZDtBQVFFQyxJQUFFLEVBQUUsQ0FSTjtBQVNFQyxPQUFLLEVBQUU7QUFUVCxDQXZCc0IsRUFrQ3RCO0FBQ0VSLE9BQUssRUFBRSxjQURUO0FBRUVDLGFBQVcsRUFBRSwwTkFGZjtBQUdFQyxPQUFLLEVBQUVPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaLEdBQWdCLGVBSHpCO0FBSUVSLE1BQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxTQUFSLENBSlI7QUFLRUMsUUFBTSxFQUFFLGdEQUxWO0FBTUVDLE9BQUssRUFBRSxFQU5UO0FBT0VDLFlBQVUsRUFBRSx1REFQZDtBQVFFQyxJQUFFLEVBQUUsQ0FSTjtBQVNFQyxPQUFLLEVBQUU7QUFUVCxDQWxDc0IsRUE2Q3RCO0FBQ0VSLE9BQUssRUFBRSxzQkFEVDtBQUVFQyxhQUFXLEVBQUUsaVJBRmY7QUFHRUMsT0FBSyxFQUFFTyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWixHQUFnQixlQUh6QjtBQUlFUixNQUFJLEVBQUUsQ0FBQyxZQUFELEVBQWUsYUFBZixFQUE2QixTQUE3QixDQUpSO0FBS0VDLFFBQU0sRUFBRSxvREFMVjtBQU1FQyxPQUFLLEVBQUUsRUFOVDtBQU9FQyxZQUFVLEVBQUUsMkRBUGQ7QUFRRUMsSUFBRSxFQUFFLENBUk47QUFTRUMsT0FBSyxFQUFFO0FBVFQsQ0E3Q3NCLEVBd0R0QjtBQUNFUixPQUFLLEVBQUUsYUFEVDtBQUVFQyxhQUFXLEVBQUUsNFlBRmY7QUFHRUMsT0FBSyxFQUFFTyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWixHQUFnQixlQUh6QjtBQUlFUixNQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFxQixTQUFyQixDQUpSO0FBS0VDLFFBQU0sRUFBRSxrREFMVjtBQU1FQyxPQUFLLEVBQUUsRUFOVDtBQU9FQyxZQUFVLEVBQUUseURBUGQ7QUFRRUMsSUFBRSxFQUFFLENBUk47QUFTRUMsT0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWixHQUFnQjtBQVR6QixDQXhEc0IsRUFtRXRCO0FBQ0VYLE9BQUssRUFBRSxrQkFEVDtBQUVFQyxhQUFXLEVBQUUsMFFBRmY7QUFHRUMsT0FBSyxFQUFFTyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWixHQUFnQixlQUh6QjtBQUlFUixNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFtQixNQUFuQixDQUpSO0FBS0VDLFFBQU0sRUFBRSxzREFMVjtBQU1FQyxPQUFLLEVBQUUsRUFOVDtBQU9FQyxZQUFVLEVBQUUsNkRBUGQ7QUFRRUMsSUFBRSxFQUFFLENBUk47QUFTRUMsT0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWixHQUFnQjtBQVR6QixDQW5Fc0IsQ0FBakI7QUFnRkEsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUowQixFQUsxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FMMEIsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWMxZjYzMmM4YTAyNDk5NmRlNzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnU29jaWFsIE5ldHdvcmsnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNvY2lhbCBuZXR3b3JrIGFwcCBpcyB0aGUgcHJvamVjdCBjb2RkZWQgd2l0aCBqUXVlcnksIGh0bWwgYW5kIGNzcy4gQ29va2llcyBhbmQgc2Vzc2lvbnMgYXJlIGltcGxlbWVudGVkIHVzaW5nIEpTLiBMb2cgaW4sIHNpZ24gdXAsIHBvc3QsIGxpa2UgYW5kIGNvbW1lbnQgZnVuY3Rpb25zIGFyZSBhbHNvIGltcGxlbWVudGVkIHVzaW5nIEpTIGFuZCBKUXVlcnkgdG9vIGFuZCBtb2NrQVBJIGFzIGEgZGF0YWJhc2UuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvMS5wbmcnLFxuICAgICAgdGFnczogWydqUXVlcnknLCAnSFRNTCcsICdDU1MnLCAnbW9ja0FQSSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWRhY2ljdnVrL1NvY2lhbC1OZXR3b3JrLUFwcC1IVE1MLUNTUy1KUy1KUVVFUlktbW9ja0FQSScsXG4gICAgdmlzaXQ6ICcnLFxuICAgIHZpZGVvX2RlbW86ICdodHRwczovL2dpdGh1Yi5jb20vdmlkYWNpY3Z1ay9Tb2NpYWwtTmV0d29yay1BcHAtSFRNTC1DU1MtSlMtSlFVRVJZLW1vY2tBUEkjcmVhZG1lJyxcbiAgICBpZDogMCxcbiAgICB2aWRlbzogJy9pbWFnZXMvMS5tcDQnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTaW1vbiBHYW1lJyxcbiAgICBkZXNjcmlwdGlvbjpcIlNpbW9uIEdhbWUsIHRoZSBhcHBsaWNhdGlvbiB3cml0dGVuIHdpdGggdGhlIEhUTUwsIENTUyBhbmQgalF1ZXJ5LiBUaGUgU2ltb24gZ2FtZSBpcyB0aGUgZXhjaXRpbmcgZWxlY3Ryb25pYyBnYW1lIG9mIGxpZ2h0cyBhbmQgc291bmRzIGluIHdoaWNoIHBsYXllcnMgbXVzdCByZXBlYXQgcmFuZG9tIHNlcXVlbmNlcyBvZiBsaWdodHMgYnkgcHJlc3NpbmcgdGhlIGNvbG9yZWQgcGFkcyBpbiB0aGUgY29ycmVjdCBvcmRlci4gSXQncyBmYXN0LXBhY2VkIHBsYXksIHdpdGggbGlnaHRzIGFuZCBzb3VuZHMgdGhhdCBjYW4gY2hhbGxlbmdlIHlvdS5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvMi5wbmcnLFxuICAgIHRhZ3M6IFsnSFRNTCcsJ0NTUycsICdKYXZhU2NyaXB0J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvU2ltb24tR2FtZS1IVE1MLUNTUy1qUXVlcnknLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly92aWRhY2ljdnVrLmdpdGh1Yi5pby9TaW1vbi1HYW1lLUhUTUwtQ1NTLWpRdWVyeS8nLFxuICAgIHZpZGVvX2RlbW86ICdodHRwczovL2dpdGh1Yi5jb20vdmlkYWNpY3Z1ay9TaW1vbi1HYW1lLUhUTUwtQ1NTLWpRdWVyeSNyZWFkbWUnLFxuICAgIGlkOiAxLFxuICAgIHZpZGVvOiAnL2ltYWdlcy8yLm1wNCcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RvRG8gTGlzdCcsXG4gICAgZGVzY3JpcHRpb246IFwiVG9Eb0xpc3QgcHJvamVjdCBpcyBteSBpbnRyb2R1Y3Rpb24gdG8gbW9uZ29EQi4gSXQgaXMgYXBwbGljYXRpb24gd2hpY2ggd2lsbCByZW1lbWJlciB5b3VyIFRvRG8gdGhpbmdzLCB5b3UgY2FuIGFkZCBhIG5ldyB0aGluZyBUb0RvIGFuZCB3aGVuIHlvdSBjaGVjayBpdCwgaXQgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGxpc3QuXCIsXG4gICAgICBpbWFnZTogcHJvY2Vzcy5lbnYuSU1HKycvaW1hZ2VzLzMuanBnJyxcbiAgICAgIHRhZ3M6IFsnSmF2YVNjcmlwdCcsICdtb25nb0RCJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvVG8tRG8tTGlzdC1Qcm9qZWN0JyxcbiAgICB2aXNpdDogJycsXG4gICAgdmlkZW9fZGVtbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWRhY2ljdnVrL1RvLURvLUxpc3QtUHJvamVjdCNyZWFkbWUnLFxuICAgIGlkOiAyLFxuICAgIHZpZGVvOiAnL2ltYWdlcy8zLm1wNCcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0Jsb2cgV2Vic2l0ZScsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIEJsb2cgV2Vic2l0ZSBpcyB3cml0dGVuIHdpdGggRUpTLCBKUywgSFRNTCwgYW5kIENTUywgYW5kIHRoZSBkYXRhYmFzZSBpcyBpbXBsZW1lbnRlZCB1c2luZyBNb25nb0RCLllvdSBjYW4gcmVhZCBhbGwgcG9zdHMsIGlmIHlvdSBoYXZlIGFuIGF1dGhlbnRpY2F0aW9uIHVzZXJuYW1lIGFuZCBwYXNzd29yZCB5b3UgY2FuIGFkZCBhIG5ldyBwb3N0IGFuZCByZW1vdmUgaXQuXCIsXG4gICAgaW1hZ2U6IHByb2Nlc3MuZW52LklNRysnL2ltYWdlcy80LmpwZycsXG4gICAgdGFnczogWydFSlMnLCAnbW9uZ29EQiddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWRhY2ljdnVrL0Jsb2ctV2Vic2l0ZS1FSlMnLFxuICAgIHZpc2l0OiAnJyxcbiAgICB2aWRlb19kZW1vOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvQmxvZy1XZWJzaXRlLUVKUyNyZWFkbWUnLFxuICAgIGlkOiAzLFxuICAgIHZpZGVvOiAnL2ltYWdlcy80Lm1wNCcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1dpa2ktQVBJLVJFU1RmdWwtQVBJJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGFwcGxpY2F0aW9uIGlzIHNtYWxsIGRlbW9uc3RyYXRpb24gb2Yga25vd2xlZGdlIG9mIFJFU1RmdWxsIEFQSXMuIFdpa2ktQVBJIGlzIHRoZSBzZXJ2ZXIgd2hpY2ggd2lsbCBoYW5kbGUgYWxsIHlvdXIgUkVTVGZ1bGwgQVBJIHJlcXVlc3RzLiBTbWFsbCBkYXRhYmFzZSBvZiAnYXJ0aWNsZXMnIGlzIGltcGxlbWVudGVkIHVzaW5nIG1vbmdvREIuIFdpdGggdGhlIFJFU1RmdWxsIEFQSXMgeW91IGNhbiBhZGQsIG1vZGlmeSwgZ2V0IGFuZCBkZWxldGUgYXJ0aWNsZXMuXCIsXG4gICAgaW1hZ2U6IHByb2Nlc3MuZW52LklNRysnL2ltYWdlcy81LmpwZycsXG4gICAgdGFnczogWydKYXZhU2NyaXB0JywgJ1JFU1RmdWwgQVBJJywnbW9uZ29EQiddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWRhY2ljdnVrL1dpa2ktQVBJLVJFU1RmdWwtQVBJJyxcbiAgICB2aXNpdDogJycsXG4gICAgdmlkZW9fZGVtbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWRhY2ljdnVrL1dpa2ktQVBJLVJFU1RmdWwtQVBJI3JlYWRtZScsXG4gICAgaWQ6IDQsXG4gICAgdmlkZW86ICcvaW1hZ2VzLzUubXA0JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU2VjcmV0cyBBcHAnLFxuICAgIGRlc2NyaXB0aW9uOiBcIidTZWNyZXRzJyBpcyB0aGUgc29jaWFsIG5ldHdvcmsgd2hlcmUgeW91IGNhbiBzaGFyZSBhbm9ueW1vdXNseSB5b3VyIHNlY3JldCB3aXRoIG90aGVyIHBlb3BsZSBhbmQgd2hlcmUgeW91IGNhbiByZWFkIHNlY3JldHMgZnJvbSBvdGhlciBwZW9wbGUgdG9vLiBUaGlzIHByb2plY3QgaXMgZGV2ZWxvcGVkIHdpdGggbm9kZS5qcywgSFRNTCBhbmQgQ1NTLiBBY2NlbnQgaW4gdGhpcyBwcm9qZWN0IGlzIG9uIGNvb2tpZXMgd2hpY2ggYXJlIGltcGxlbWVudGVkIG9uIHRoZSBiYWNrLWVuZCBzaWRlIHVzaW5nICdwYXNzcG9ydCcsIHBhc3N3b3JkcyBvZiB0aGUgdXNlcnMgYXJlIGhhc2hlZCBhbmQgbG9nIGluL3JlZ2lzdGVyIHdpdGggR29vZ2xlL0ZhY2Vib29rIGlzIGltcGxlbWVudGVkIHRvby5cIixcbiAgICBpbWFnZTogcHJvY2Vzcy5lbnYuSU1HKycvaW1hZ2VzLzYuanBnJyxcbiAgICB0YWdzOiBbJ0VKUycsICdKYXZhU2NyaXB0JywnbW9uZ29EQiddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWRhY2ljdnVrL1NlY3JldHMtQXBsaWNhdGlvbicsXG4gICAgdmlzaXQ6ICcnLFxuICAgIHZpZGVvX2RlbW86ICdodHRwczovL2dpdGh1Yi5jb20vdmlkYWNpY3Z1ay9TZWNyZXRzLUFwbGljYXRpb24jcmVhZG1lJyxcbiAgICBpZDogNSxcbiAgICB2aWRlbzogcHJvY2Vzcy5lbnYuSU1HKycvaW1hZ2VzLzYubXA0JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnS2VlcGVyQXBwIE1vdG9rbycsXG4gICAgZGVzY3JpcHRpb246IFwiS2VlcGVyIEFwcCBpcyBhbiBhcHBsaWNhdGlvbiB3aXRoIHRoZSBSZWFjdCBmcm9udGVuZCBhbmQgdGhlIElDVCBhcyBhIGJhY2tlbmQuIEJhY2tlbmQgaXMgd3JpdHRlbiB1c2luZyBNb3Rva28gYW5kIHRoaXMgaXMgbXkgZmlyc3Qgd2ViMyBhcHAuIFRoZSBhcHBsaWNhdGlvbiByZXByZXNlbnRzIGEgYmxhbmsgYm9hcmQgb24gd2hpY2ggeW91IGNhbiBwdXQgeW91ciBub3RlcyBhbmQgcmVtb3ZlIHRoZW0gd2hlbiB5b3UgZG9uJ3QgbmVlZCB0aGVtIGFueW1vcmUuXCIsXG4gICAgaW1hZ2U6IHByb2Nlc3MuZW52LklNRysnL2ltYWdlcy83LmpwZycsXG4gICAgdGFnczogWydSZWFjdCcsICdNb3Rva28nLCdXZWIzJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpZGFjaWN2dWsvS2VlcGVyQXBwLVJlYWN0LU1vdG9rbycsXG4gICAgdmlzaXQ6ICcnLFxuICAgIHZpZGVvX2RlbW86ICdodHRwczovL2dpdGh1Yi5jb20vdmlkYWNpY3Z1ay9LZWVwZXJBcHAtUmVhY3QtTW90b2tvI3JlYWRtZScsXG4gICAgaWQ6IDYsXG4gICAgdmlkZW86IHByb2Nlc3MuZW52LklNRysnL2ltYWdlcy83Lm1wNCcsXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ1N0YXJ0ZWQgbXkgam91cm5leScsIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0JhY2hlbG9yIHdpdGggSG9ub3VycyBpbiBFbGVjdHJpY2FsIGFuZCBDb21wdXRlciBFbmdpbmVlcmluZyAoQi5FbGVjLkNvbXAuRW5nLiknLCB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdTdGFydGVkIHRvIHdvcmsgaW4gdGhlIGF1dG9tb3RpdmUgaW5kdXN0cnkgYXMgYSBzb2Z0d2FyZSBlbmdpbmVlci4nLCB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdNYXN0ZXIgaW4gRWxlY3RyaWNhbCBhbmQgQ29tcHV0ZXIgRW5naW5lZXJpbmcgKE0uRWwuQ29tcC5FbmcuKScsIH0sXG4gIHsgeWVhcjogMjAyMiwgdGV4dDogJ1N0YXJ0ZWQgbXkgZnJlZWxhbmNlIHdlYjIvd2ViMyBkZXZlbG9wbWVudCBqb3VybmV5LicsIH0sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=