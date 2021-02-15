import React, {useState, useCallback} from "react";

const RATING_LIST = Array.from({length: 5}).fill(1);

const CommentForm = () => {
  const [selectedStart, setSelectedStar] = useState(null);
  const [commentText, setCommentText] = useState(``);
  const handleSelectedStarsChange = useCallback((evt) => {
    setSelectedStar(evt.target.value);
  }, []);
  const handleCommentTextChange = useCallback((evt) => {
    setCommentText(evt.target.value);
  }, []);

  return (
    <form className="reviews__form form"
      action="#"
      method="post">
      <label className="reviews__label form__label"
        htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING_LIST.map((it, index) => {
          const value = `${RATING_LIST.length - index}`;
          const id = `${value}-stars`;

          return (
            <React.Fragment key={`${index}`}>
              <input className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={id}
                type="radio"
                checked={value === selectedStart}
                onChange={handleSelectedStarsChange}/>
              <label htmlFor={id}
                className="reviews__rating-label form__rating-label"
                title="perfect">
                <svg className="form__star-image"
                  width="37"
                  height="33">
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </React.Fragment>
          );
        })}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={commentText}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentTextChange}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button"
          type="submit"
          disabled="">
            Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
