import React, { Component } from "react";

export default class ListAndKeys extends Component {
  courseList = ["ReactJs", "Angular", "NodeJS"];

  renderCourseList = () => {
    return this.courseList.map(course => <li>{course}</li>);
  }
  // Homework: áp dụng mảng vào bài tập chuyển màu xe
  render() {
    return (
      <div>
        <h2>Danh sách khóa học</h2>
        <ul>
          {this.renderCourseList()}
        </ul>
      </div>
    );
  }
}
