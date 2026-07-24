"use client";
import { DataReviews, postReqest } from "@/lib/api/api";
import EmptyStar from "@/public/EmptyStar.svg";
import Star from "@/public/Star.svg";
import Image from "next/image";
import css from "./Revies.module.css";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your name.")
    .min(5, "Name must be at least 5 characters.")
    .max(40, "Name must be less than 40 characters."),
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Please enter your email."),
});

export interface FormValuesPost {
  name: string;
  email: string;
}
const initialValues: FormValuesPost = {
  name: "",
  email: "",
};

export default function Revies({ reviews, camperId }: { reviews: DataReviews[]; camperId:string  }) {
  const handleSubmit = (
    values: FormValuesPost,
    formikHelper: FormikHelpers<FormValuesPost>,
  ) => {
    postReqest(camperId, values);
    formikHelper.resetForm();
  };

  return (
    <div className={css.content}>
      <h4 className={css.h4}>Reviews</h4>
      <div className={css.forms}>
        <ul className={css.globalReviews}>
          {reviews.map((revie) => (
            <li key={revie.id} className={css.blockRevie}>
              <div className={css.provile}>
                <div className={css.avatar}>{revie.reviewer_name[0]}</div>
                <div className={css.nameRating}>
                  <div className={css.reviewer_name}>{revie.reviewer_name}</div>
                  <div className={css.rating}>
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < revie.reviewer_rating ? (
                        <Image
                          key={i}
                          src={Star}
                          alt="star"
                          width={15}
                          height={14}
                        />
                      ) : (
                        <Image
                          className={css.empty}
                          key={i}
                          src={EmptyStar}
                          alt="empty star"
                          width={15}
                          height={14}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
              <div className={css.text}>
                <p>{revie.comment}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={css.wrapperForm}>
          <h4 className={css.formh4}>Book your campervan now</h4>
          <p className={css.formh4P}>
            Stay connected! We are always ready to help you.
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className={css.formMain}>
                <div className={css.form_group}>
                  <label
                    htmlFor="name"
                    className={
                      errors.name && touched.name ? css.labelError : ""
                    }
                  >
                    Name*
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className={
                      errors.name && touched.name ? css.inputError : ""
                    }
                  />
                  <ErrorMessage
                    component="span"
                    className={css.error}
                    name="name"
                  />
                </div>

                <div className={css.form_group}>
                  <label
                    htmlFor="email"
                    className={
                      errors.email && touched.email ? css.labelError : ""
                    }
                  >
                    Email*
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className={
                      errors.email && touched.email ? css.inputError : ""
                    }
                  />
                  <ErrorMessage
                    component="span"
                    className={css.error}
                    name="email"
                  />
                </div>

                <button type="submit" className={css.btn_send}>
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
