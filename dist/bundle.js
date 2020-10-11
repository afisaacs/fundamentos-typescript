(()=>{"use strict";var e={987:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Album=void 0;const i=r(123);class s extends i.Item{constructor(e,t){super(e,t),this.pictures=[]}addPicture(e){this.pictures.push(e)}}t.Album=s},123:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0,t.Item=class{constructor(e,t){this.id=e,this.title=t}}},519:(e,t,r)=>{const i=r(987),s=r(945),o=r(449),n=new(r(536).User)(10,"arendev","Aaron",!0),a=new i.Album(10,"Platzi Pictures"),u=new o.Picture(12,"TypeScript","2020-10",s.PhotoOrientation.Landscape);n.addAlbum(a),a.addPicture(u),console.log("user",n),n.removeAlbum(a),console.log("user",n)},945:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.PhotoOrientation=void 0,(r=t.PhotoOrientation||(t.PhotoOrientation={}))[r.Landscape=0]="Landscape",r[r.Portrait=1]="Portrait",r[r.Square=2]="Square",r[r.Panorama=3]="Panorama"},449:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Picture=void 0;const i=r(123);class s extends i.Item{constructor(e,t,r,i){super(e,t),this._date=r,this._orientation=i}toString(){return`[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`}}t.Picture=s},536:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.User=void 0,t.User=class{constructor(e,t,r,i){this.id=e,this.username=t,this.firstName=r,this.isPro=i,this.album=[]}addAlbum(e){this.album.push(e)}removeAlbum(e){const t=this.album.findIndex((t=>t.id===e.id));let r;return t>=0&&(r=this.album[t],this.album.splice(t,1)),r}}}},t={};!function r(i){if(t[i])return t[i].exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}(519)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG90by1hcHAvLi9zcmMvYWxidW0udHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL3Bob3RvLW9yaWVudGF0aW9uLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy9waWN0dXJlLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy91c2VyLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waG90by1hcHAvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQWxidW0iLCJpdGVtXzEiLCJJdGVtIiwiaWQiLCJ0aXRsZSIsInN1cGVyIiwidGhpcyIsInBpY3R1cmVzIiwicGljdHVyZSIsInB1c2giLCJhbGJ1bV8xIiwicGhvdG9fb3JpZW50YXRpb25fMSIsInBpY3R1cmVfMSIsInVzZXIiLCJVc2VyIiwiYWxidW0iLCJQaWN0dXJlIiwiUGhvdG9PcmllbnRhdGlvbiIsIkxhbmRzY2FwZSIsImFkZEFsYnVtIiwiYWRkUGljdHVyZSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVBbGJ1bSIsIl9kYXRlIiwiX29yaWVudGF0aW9uIiwidXNlcm5hbWUiLCJmaXJzdE5hbWUiLCJpc1BybyIsImluZGV4IiwiZmluZEluZGV4IiwiYSIsImRlbGV0ZWRBbGJ1bSIsInNwbGljZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iXSwibWFwcGluZ3MiOiJ3Q0FDQUEsT0FBT0MsZUFBZUMsRUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdERELEVBQVFFLFdBQVEsRUFDaEIsTUFBTUMsRUFBUyxFQUFRLEtBQ3ZCLE1BQU1ELFVBQWNDLEVBQU9DLEtBQ3ZCLFlBQVlDLEVBQUlDLEdBQ1pDLE1BQU1GLEVBQUlDLEdBQ1ZFLEtBQUtDLFNBQVcsR0FFcEIsV0FBV0MsR0FDUEYsS0FBS0MsU0FBU0UsS0FBS0QsSUFHM0JWLEVBQVFFLE1BQVFBLEcsWUNaaEJKLE9BQU9DLGVBQWVDLEVBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RERCxFQUFRSSxVQUFPLEVBT2ZKLEVBQVFJLEtBTlIsTUFDSSxZQUFZQyxFQUFJQyxHQUNaRSxLQUFLSCxHQUFLQSxFQUNWRyxLQUFLRixNQUFRQSxLLGNDSnJCLE1BQU1NLEVBQVUsRUFBUSxLQUNsQkMsRUFBc0IsRUFBUSxLQUM5QkMsRUFBWSxFQUFRLEtBRXBCQyxFQUFPLElBREUsRUFBUSxLQUNDQyxNQUFLLEdBQUksVUFBVyxTQUFTLEdBQy9DQyxFQUFRLElBQUlMLEVBQVFWLE1BQU0sR0FBSSxtQkFDOUJRLEVBQVUsSUFBSUksRUFBVUksUUFBUSxHQUFJLGFBQWMsVUFBV0wsRUFBb0JNLGlCQUFpQkMsV0FFeEdMLEVBQUtNLFNBQVNKLEdBQ2RBLEVBQU1LLFdBQVdaLEdBQ2pCYSxRQUFRQyxJQUFJLE9BQVFULEdBQ3BCQSxFQUFLVSxZQUFZUixHQUNqQk0sUUFBUUMsSUFBSSxPQUFRVCxJLFlDVnBCLElBQVdJLEVBSFhyQixPQUFPQyxlQUFlQyxFQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0REQsRUFBUW1CLHNCQUFtQixHQUVoQkEsRUFLV25CLEVBQVFtQixtQkFBcUJuQixFQUFRbUIsaUJBQW1CLEtBSnpEQSxFQUE0QixVQUFJLEdBQUssWUFDdERBLEVBQWlCQSxFQUEyQixTQUFJLEdBQUssV0FDckRBLEVBQWlCQSxFQUF5QixPQUFJLEdBQUssU0FDbkRBLEVBQWlCQSxFQUEyQixTQUFJLEdBQUssWSxjQ1B6RHJCLE9BQU9DLGVBQWVDLEVBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RERCxFQUFRa0IsYUFBVSxFQUNsQixNQUFNZixFQUFTLEVBQVEsS0FDdkIsTUFBTWUsVUFBZ0JmLEVBQU9DLEtBQ3pCLFlBQVlDLEVBQUlDLEVBQU9vQixFQUFPQyxHQUMxQnBCLE1BQU1GLEVBQUlDLEdBQ1ZFLEtBQUtrQixNQUFRQSxFQUNibEIsS0FBS21CLGFBQWVBLEVBRXhCLFdBQ0ksTUFBTyxRQUFRbkIsS0FBS0gsY0FBY0csS0FBS0YsdUJBQXVCRSxLQUFLbUIsaUJBRzNFM0IsRUFBUWtCLFFBQVVBLEcsWUNibEJwQixPQUFPQyxlQUFlQyxFQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0REQsRUFBUWdCLFVBQU8sRUFzQmZoQixFQUFRZ0IsS0FyQlIsTUFDSSxZQUFZWCxFQUFJdUIsRUFBVUMsRUFBV0MsR0FDakN0QixLQUFLSCxHQUFLQSxFQUNWRyxLQUFLb0IsU0FBV0EsRUFDaEJwQixLQUFLcUIsVUFBWUEsRUFDakJyQixLQUFLc0IsTUFBUUEsRUFDYnRCLEtBQUtTLE1BQVEsR0FFakIsU0FBU0EsR0FDTFQsS0FBS1MsTUFBTU4sS0FBS00sR0FFcEIsWUFBWUEsR0FDUixNQUFNYyxFQUFRdkIsS0FBS1MsTUFBTWUsV0FBVUMsR0FBS0EsRUFBRTVCLEtBQU9ZLEVBQU1aLEtBQ3ZELElBQUk2QixFQUtKLE9BSklILEdBQVMsSUFDVEcsRUFBZTFCLEtBQUtTLE1BQU1jLEdBQzFCdkIsS0FBS1MsTUFBTWtCLE9BQU9KLEVBQU8sSUFFdEJHLE1DcEJYRSxFQUEyQixJQUcvQixTQUFTQyxFQUFvQkMsR0FFNUIsR0FBR0YsRUFBeUJFLEdBQzNCLE9BQU9GLEVBQXlCRSxHQUFVdEMsUUFHM0MsSUFBSXVDLEVBQVNILEVBQXlCRSxHQUFZLENBR2pEdEMsUUFBUyxJQU9WLE9BSEF3QyxFQUFvQkYsR0FBVUMsRUFBUUEsRUFBT3ZDLFFBQVNxQyxHQUcvQ0UsRUFBT3ZDLFFDbEJmcUMsQ0FBb0IsTSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWxidW0gPSB2b2lkIDA7XG5jb25zdCBpdGVtXzEgPSByZXF1aXJlKFwiLi9pdGVtXCIpO1xuY2xhc3MgQWxidW0gZXh0ZW5kcyBpdGVtXzEuSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlKSB7XG4gICAgICAgIHN1cGVyKGlkLCB0aXRsZSk7XG4gICAgICAgIHRoaXMucGljdHVyZXMgPSBbXTtcbiAgICB9XG4gICAgYWRkUGljdHVyZShwaWN0dXJlKSB7XG4gICAgICAgIHRoaXMucGljdHVyZXMucHVzaChwaWN0dXJlKTtcbiAgICB9XG59XG5leHBvcnRzLkFsYnVtID0gQWxidW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSXRlbSA9IHZvaWQgMDtcbmNsYXNzIEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG59XG5leHBvcnRzLkl0ZW0gPSBJdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhbGJ1bV8xID0gcmVxdWlyZShcIi4vYWxidW1cIik7XG5jb25zdCBwaG90b19vcmllbnRhdGlvbl8xID0gcmVxdWlyZShcIi4vcGhvdG8tb3JpZW50YXRpb25cIik7XG5jb25zdCBwaWN0dXJlXzEgPSByZXF1aXJlKFwiLi9waWN0dXJlXCIpO1xuY29uc3QgdXNlcl8xID0gcmVxdWlyZShcIi4vdXNlclwiKTtcbmNvbnN0IHVzZXIgPSBuZXcgdXNlcl8xLlVzZXIoMTAsICdhcmVuZGV2JywgJ0Fhcm9uJywgdHJ1ZSk7XG5jb25zdCBhbGJ1bSA9IG5ldyBhbGJ1bV8xLkFsYnVtKDEwLCAnUGxhdHppIFBpY3R1cmVzJyk7XG5jb25zdCBwaWN0dXJlID0gbmV3IHBpY3R1cmVfMS5QaWN0dXJlKDEyLCAnVHlwZVNjcmlwdCcsICcyMDIwLTEwJywgcGhvdG9fb3JpZW50YXRpb25fMS5QaG90b09yaWVudGF0aW9uLkxhbmRzY2FwZSk7XG4vLyBSZWxhY2lvbmVzXG51c2VyLmFkZEFsYnVtKGFsYnVtKTtcbmFsYnVtLmFkZFBpY3R1cmUocGljdHVyZSk7XG5jb25zb2xlLmxvZygndXNlcicsIHVzZXIpO1xudXNlci5yZW1vdmVBbGJ1bShhbGJ1bSk7XG5jb25zb2xlLmxvZygndXNlcicsIHVzZXIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBob3RvT3JpZW50YXRpb24gPSB2b2lkIDA7XG52YXIgUGhvdG9PcmllbnRhdGlvbjtcbihmdW5jdGlvbiAoUGhvdG9PcmllbnRhdGlvbikge1xuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIkxhbmRzY2FwZVwiXSA9IDBdID0gXCJMYW5kc2NhcGVcIjtcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJQb3J0cmFpdFwiXSA9IDFdID0gXCJQb3J0cmFpdFwiO1xuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIlNxdWFyZVwiXSA9IDJdID0gXCJTcXVhcmVcIjtcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJQYW5vcmFtYVwiXSA9IDNdID0gXCJQYW5vcmFtYVwiO1xufSkoUGhvdG9PcmllbnRhdGlvbiA9IGV4cG9ydHMuUGhvdG9PcmllbnRhdGlvbiB8fCAoZXhwb3J0cy5QaG90b09yaWVudGF0aW9uID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QaWN0dXJlID0gdm9pZCAwO1xuY29uc3QgaXRlbV8xID0gcmVxdWlyZShcIi4vaXRlbVwiKTtcbmNsYXNzIFBpY3R1cmUgZXh0ZW5kcyBpdGVtXzEuSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBfZGF0ZSwgX29yaWVudGF0aW9uKSB7XG4gICAgICAgIHN1cGVyKGlkLCB0aXRsZSk7XG4gICAgICAgIHRoaXMuX2RhdGUgPSBfZGF0ZTtcbiAgICAgICAgdGhpcy5fb3JpZW50YXRpb24gPSBfb3JpZW50YXRpb247XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFtpZDogJHt0aGlzLmlkfSwgdGl0bGU6ICR7dGhpcy50aXRsZX0sIG9yaWVudGF0aW9uOiAke3RoaXMuX29yaWVudGF0aW9ufV1gO1xuICAgIH1cbn1cbmV4cG9ydHMuUGljdHVyZSA9IFBpY3R1cmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVXNlciA9IHZvaWQgMDtcbmNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB1c2VybmFtZSwgZmlyc3ROYW1lLCBpc1Bybykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICAgIHRoaXMuaXNQcm8gPSBpc1BybztcbiAgICAgICAgdGhpcy5hbGJ1bSA9IFtdO1xuICAgIH1cbiAgICBhZGRBbGJ1bShhbGJ1bSkge1xuICAgICAgICB0aGlzLmFsYnVtLnB1c2goYWxidW0pO1xuICAgIH1cbiAgICByZW1vdmVBbGJ1bShhbGJ1bSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuYWxidW0uZmluZEluZGV4KGEgPT4gYS5pZCA9PT0gYWxidW0uaWQpO1xuICAgICAgICBsZXQgZGVsZXRlZEFsYnVtO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgZGVsZXRlZEFsYnVtID0gdGhpcy5hbGJ1bVtpbmRleF07XG4gICAgICAgICAgICB0aGlzLmFsYnVtLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlbGV0ZWRBbGJ1bTtcbiAgICB9XG59XG5leHBvcnRzLlVzZXIgPSBVc2VyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyg1MTkpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==