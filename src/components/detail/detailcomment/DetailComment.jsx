import React, { useEffect, useState } from "react";
import { CommentService } from "../../../services/commentService";
import DetailCommentItem from "./DetailCommentItem";
import DetailCommentSend from "./DetailCommentSend";
require("dotenv").config();

export default function DetailComment(props) {
  const [ detailCommentJson, setDetailCommentJson] = useState([]);
  const [ addCommentFlg, setAddCommentFlg ] = useState(false);
  const [ updateCommentFlg, setUpdateCommentFlg ] = useState(false);
  const [ deleteCommentFlg, setDeleteCommentFlg ] = useState(false);

  useEffect(() => {
    const getDetailComments = async () => {
      //TEST
        const detailComment = [
        {
          commentId: 1,
          content:
            "テニスは面白いです。中学生の頃から部活でやっています。本気でやっても、遊びでやっても楽しくできますよ。",
        },
        {
          commentId: 2,
          content:
            "歳をとってもテニスはできます。長年楽しめる趣味なので、是非一緒にやりましょう。",
        },
      ];
      
      const commentService = new CommentService();
      const detailCommentJson = await commentService.getCommentByHobby(props.id)

      setDetailCommentJson(detailCommentJson);
    };

    getDetailComments();
    setAddCommentFlg(false);
  }, [addCommentFlg, updateCommentFlg, deleteCommentFlg]);

  function addComment() {
      setAddCommentFlg(true);
  }

  function updateComment() {
    setUpdateCommentFlg(true);
  }

  function deleteComment() {
    setDeleteCommentFlg(true);
  }

  return (
    <div>
      <DetailCommentSend hobbyId={props.hobbyId} addComment={addComment} />
      {detailCommentJson.map(value=>{
        return <DetailCommentItem hobbyId={props.hobbyId} detailComment={value} key={value.commentId} addComment={addComment} updateComment={updateComment} deleteComment={deleteComment}/>
      })}
    </div>
  );
}