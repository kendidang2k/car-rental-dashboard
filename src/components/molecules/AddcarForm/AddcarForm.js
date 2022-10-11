import { Box, ButtonBase, Grid, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik';
import React, { useCallback } from 'react'
import ReactImageUploading from 'react-images-uploading';
import editIcon from '../../../assets/icons/edit.png'
import deleteIcon from '../../../assets/icons/trash.png'
import './index.css'

export default function AddcarForm() {

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList);
    };

    return (
        <Box>
            <Formik
                initialValues={{
                    carName: '',
                    year: '',
                    seat: '',
                    kilomet: '',
                    engine: 'Tự động',
                    drivingMode: 'Tự lái'
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form className='add__car__form'>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Typography className='field__name' component={"p"}>Tên xe</Typography>
                            <Field className="field__input" id="carName" name="carName" placeholder="Tên xe" />

                            <Typography className='field__name' component={"p"}>Năm sản xuất</Typography>
                            <Field className="field__input" id="year" name="year" placeholder="Năm sản xuất" />

                            <Typography className='field__name' component={"p"}>Số chỗ ngồi</Typography>
                            <Field type="number" className="field__input" id="seat" name="seat" placeholder="Số chỗ ngồi" />

                            <Typography className='field__name' component={"p"}>Số Kilomet đã đi</Typography>
                            <Field type="number" className="field__input" id="kilomet" name="kilomet" placeholder="Số Kilomet đã đi" />

                            <Typography className='field__name' component={"p"}>Loại động cơ</Typography>
                            <Field name="engine" component="select">
                                <option value="Xăng">Xăng</option>
                                <option value="Hỗ hợp">Hỗ hợp</option>
                                <option value="Điện">Điện</option>
                            </Field>

                            <Typography className='field__name' component={"p"}>Chế độ lái</Typography>
                            <Field name="drivingMode" component="select">
                                <option value="Tự động">Tự động</option>
                                <option value="Tự lái">Tự lái</option>
                            </Field>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography className='field__name' component={"p"}>Tải hình ảnh lên</Typography>
                            <ReactImageUploading
                                multiple
                                value={images}
                                onChange={onChange}
                                maxNumber={maxNumber}
                                dataURLKey="data_url"
                            >
                                {({
                                    imageList,
                                    onImageUpload,
                                    onImageRemoveAll,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps,
                                }) => (
                                    // write your building UI
                                    <div className="upload__image-wrapper">
                                        <button
                                            type='button'
                                            className='upload__image__button'
                                            style={isDragging ? { color: 'red' } : undefined}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                        >
                                            Click or Drop Images here
                                        </button>
                                        <button type='button' className='remove__all__image__button' onClick={onImageRemoveAll}>Remove all images</button>
                                        {imageList.map((image, index) => {
                                            console.log("🚀 ~ file: AddcarForm.js ~ line 100 ~ {imageList.map ~ image", image)
                                            return (
                                                (
                                                    <Box key={index} className="image-item" sx={{ marginBottom: '20px', border: '1px dashed #000', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: "10px" }}>
                                                        <img src={image.data_url} alt="" width="100" />
                                                        <Box className="image-item__btn-wrapper" >
                                                            <button type='button' className='option__item__image' onClick={() => onImageUpdate(index)}>
                                                                <Box component={"img"} src={editIcon} alt="edit icon" sx={{}} />
                                                            </button>
                                                            <button type='button' className='option__item__image' onClick={() => onImageRemove(index)}>
                                                                <Box component={"img"} src={deleteIcon} alt="delete icon" sx={{ width: '28px' }} />
                                                            </button>
                                                        </Box>
                                                    </Box>
                                                )
                                            )
                                        })}
                                    </div>
                                )}
                            </ReactImageUploading>
                        </Grid>
                    </Grid>

                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                        <ButtonBase type="submit" sx={{ backgroundColor: '#00593C', width: '400px', height: '50px', fontSize: '25px', color: '#fff', borderRadius: '50px', boxShadow: '0px 4px 19px -4px rgba(0,89,60,0.78)' }}>Thêm xe mới</ButtonBase>
                    </Box>
                </Form>
            </Formik>
        </Box>
    )
}
