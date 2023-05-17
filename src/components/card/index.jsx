import React from "react";
import moment from "moment";

const Card = ({ data }) => {
  return (
    <div key={data._id}>
      <div className="d-flex pb-2 justify-content-between align-items-center item_border">
        <div>
          <div>
            <div className="card_item_name">{data.title}</div>
          </div>
        </div>
        <div>
          <div>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="13" cy="13" r="13" fill="#ECECEC" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.0004 6C11.0122 6 9.40039 7.61184 9.40039 9.6C9.40039 11.5882 11.0122 13.2 13.0004 13.2C14.9886 13.2 16.6004 11.5882 16.6004 9.6C16.6004 7.61184 14.9886 6 13.0004 6Z"
                fill="#151414"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.2 14.3579C10.0861 14.3579 9.01778 14.8004 8.23014 15.588C7.44249 16.3757 7 17.444 7 18.5579C7 19.0352 7.18964 19.4931 7.52714 19.8306C7.86478 20.1683 8.32254 20.3579 8.8 20.3579H17.2C17.6775 20.3579 18.1352 20.1683 18.4727 19.8306C18.8104 19.4931 19 19.0352 19 18.5579C19 17.444 18.5575 16.3757 17.7699 15.588C16.9822 14.8004 15.9139 14.3579 14.8 14.3579H11.2Z"
                fill="#151414"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="d-flex pt-2 align-items-center justify-content-between">
        <div>
          {data.issue === "to_do" ? (
            <div className="issue_toDo">{data.issue}</div>
          ) : data.issue === "in_progress" ? (
            <div className="issue_inProgress">{data.issue}</div>
          ) : data.issue === "code_review" ? (
            <div className="issue_codeReview">{data.issue}</div>
          ) : data.issue === "code_qa" ? (
            <div className="issue_qa">{data.issue}</div>
          ) : (
            <div className="issue_done">{data.issue}</div>
          )}
        </div>
        <div>
          <span className="item_sub_text">
            {data.date !== "" ? moment(data.date).format("DD/MM/YYYY") : "-"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
