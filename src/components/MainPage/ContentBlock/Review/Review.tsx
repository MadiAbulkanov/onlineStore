import { FC } from "react";
import { ReviewProps } from "../../../../types/IReview.interface";

export const Review: FC<ReviewProps> = ({ review }) => {
    return (
        <div className="review-card">
            <p className="review-text">«{review.text}»</p>
            <p className="review-author">- {review.author} -</p>
        </div>
    )
};
