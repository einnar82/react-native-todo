import React from 'react'
import { StyleSheet, View, Text, Button, Image, TextInput } from 'react-native'
import globalStyles from '../styles/global'
import { Formik } from 'formik'
import * as yup from 'yup'

const reviewSchema = yup.object({
    title: yup.string().required('Title is required').min(4),
    body: yup.string().required('Body is required').min(8),
    rating: yup.string().required('Rating is required').test(
        'is-num-1-5', 
        'Rating must be a number 1 - 5',
        val => {
            return parseInt(val) < 6 && parseInt(val) > 0
        })
})

const ReviewForm = ({addReview, ...props}) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values)
                }}>
                {(formikProps) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review Title"
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                            onBlur={formikProps.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.title && formikProps.errors.title}
                        </Text>
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder="Review body"
                            onChangeText={formikProps.handleChange('body')}
                            value={formikProps.values.body}
                            onBlur={formikProps.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.body && formikProps.errors.body}
                        </Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            keyboardType="numeric"
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.values.rating}
                            onBlur={formikProps.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.rating && formikProps.errors.rating}
                        </Text>
                        <Button 
                            title="submit" 
                            color="maroon" 
                            onPress={formikProps.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm;