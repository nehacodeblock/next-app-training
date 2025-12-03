import React from 'react'
import * as yup from "yup"

export const loginSchema = yup.object({
    name:yup.string().required("Name is required"),
    email:yup.string().required("Email is required").email("Invalid email format"),
    password:yup.string().min(4,"min 4 characters required").required('password is requred'),
    country:yup.string().required("country is required"),
    gender:yup.string().required("gender is required"),
    city:yup.string().required("City is required"),
})

export type LoginSchemaType = yup.InferType<typeof loginSchema>
  


