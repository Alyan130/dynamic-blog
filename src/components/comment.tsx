
import { useState } from "react";

interface Comment {
  id: number;
  author: string;
  content: string;
}

interface CommentSection {
  postId: number;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: "Ahmed", content: "Great post!" },
    { id: 2, author: "Hassan", content: "Very informative, thanks!" },
  ]);

  const [newComment, setNewComment] = useState<string>("");

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (newComment.trim() !== "") {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        author: "Anonymous",
        content: newComment,
      };

      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  return (
    <div className="w-full sm:w-[90%] lg:w-[1000px] bg-white p-4 sm:pl-5 mt-6">
      <h3 className="text-[18px] sm:text-[22px] font-bold text-left">Comments</h3>
      
      <div className="mt-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b py-2">
            <p className="font-semibold">{comment.author}:</p>
            <p className="text-sm">{comment.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleCommentSubmit} className="mt-6 flex flex-col">
        <textarea
          value={newComment}
          onChange={handleCommentChange} 
          placeholder="Add a comment..."
          className="p-2 border rounded-md"
        />
        <button
          type="submit"
          className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
