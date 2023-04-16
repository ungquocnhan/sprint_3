import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export function CustomerEdit() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [customer, setCustomer] = useState({});
    const [customerTypeList, setCustomerTypeList] = useState([]);
    const initialValues = {
        name: '',
        email: '',
        birthday: '',
        gender: '',
        idCard: '',
        phoneNumber: '',
        address: '',
        customerType: {id: 0, name: ''}
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Mininum 2 characters")
                .max(50, "Maximum 50 characters")
                .required("Required!"),
            email: Yup.string()
                .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Invalid email format")
                .max(50, "Maximum 50 characters")
                .required("Required!"),
            birthday: Yup.string()
                .required("Required!"),
            gender: Yup.string()
                .oneOf(['True', 'False', 'Other'])
                .required("Required!"),
            idCard: Yup.string()
                .matches(/^(\d{12})$/, "Invalid idCard format")
                .max(50, "Maximum 50 characters")
                .required("Required!"),
            phoneNumber: Yup.string()
                .matches(/^(\d{9})$/, "Invalid phone format")
                .required("Required!"),
            address: Yup.string()
                .max(50, "Maximum 50 characters")
                .required("Required!"),
        }),
        onSubmit: (values, actions) => {
            axios.post(`http://localhost:3000/customer`, values)
                .then(() => {
                    Swal("", "Create success", "success");
                    navigate("/customer-list");
                })
                .catch(err => {
                    Swal("", "Create no success", "error");
                    throw err;
                })
        }
    })

    useEffect(() => {
        axios.get(`http://localhost:3000/customer/${id}`)
            .then(res => {
                console.log(res.data)
                setCustomer(res.data);
            })
            .catch(err => {
                throw err;
            })
    }, [id])

    useEffect(() => {
        axios.get(`http://localhost:3000/customerTypes`)
            .then(res => {
                setCustomerTypeList(res.data);
            })
            .catch(err => {
                throw err;
            })
    }, [])

    useEffect(() => {
        if (customer) {
            formik.setFieldValue('name', customer.name);
            formik.setFieldValue('email', customer.email);
            formik.setFieldValue('birthday', customer.birthday);
            // formik.setFieldValue('gender', customer.gender);
            formik.setFieldValue('idCard', customer.idCard);
            formik.setFieldValue('phoneNumber', customer.phoneNumber);
            formik.setFieldValue('address', customer.address);
            // formik.setFieldValue('customerType', customer.customerType);
        }
    }, [customer, formik]);

    // passwordRegex = "/^.*(?=.{8,})((?=.*[!@#$%^&*()\\-_=+{};:,<.>]){1})(?=.*\\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,\n" +
    //     "      \"Password must contain at least 8 characters, one uppercase, one number and one special case character\"";
    //     (0|\+84)(3[2-9]|5[689]|7[0|6-9]|8[1-9]|9[0-9])(\d{7})

    return (
        <>
            <div className="row m-0 col-md col-lg col-xl">
                <form onSubmit={formik.handleSubmit}>
                    <div className="d-flex justify-content-center align-items-center mt-2 mb-2">
                        <div className="boxed shadow h-200 ">
                            <fieldset>
                                <legend>
                                    <h2 className="card-title mt-3 text-center fw-bold">
                                        Create Customer
                                    </h2>
                                </legend>
                            </fieldset>
                            <div className="form-group">

                                <div className="row">
                                    <div className="col-lg-4">
                                        <label className="form-label mt-2">
                                            Họ và tên
                                            <span style={{color: "red"}}> (*)</span>:
                                        </label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input name="name"
                                               type="text"
                                               className="form-control"
                                               value={formik.values.name}
                                               onChange={formik.handleChange}
                                               placeholder="Nhập họ và tên tại đây."/>
                                        {/*{formik.errors.name && formik.touched.name && (*/}
                                        {/*    <p style={{color: "red"}}>{formik.errors.name}</p>*/}
                                        {/*)}*/}
                                        {formik.errors.name && formik.touched.name ?
                                            <span style={{color: "red"}}>{formik.errors.name}</span> :
                                            <span><br/></span>
                                        }
                                    </div>
                                </div>

                            </div>

                            <div className="form-group mt-1">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <label className="form-label mt-2">
                                            Email
                                            <span style={{color: "red"}}> (*)</span>:
                                        </label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="email"
                                               name="email"
                                               className="form-control"
                                               value={formik.values.email}
                                               onChange={formik.handleChange}
                                               placeholder="Nhập email tại đây."/>
                                        {formik.errors.email && formik.touched.email ?
                                            <span style={{color: "red"}}>{formik.errors.email}</span> :
                                            <span><br/></span>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt-1">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <label className="form-label mt-2">
                                            Birthday
                                            <span style={{color: "red"}}> (*)</span>:
                                        </label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="date"
                                               name="birthday"
                                               className="form-control"
                                               value={formik.values.birthday}
                                               onChange={formik.handleChange}/>
                                        {formik.errors.birthday && formik.touched.birthday ?
                                            <span style={{color: "red"}}>{formik.errors.birthday}</span> :
                                            <span><br/></span>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt-1">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <label className="form-label mt-2">
                                            Giới tính
                                            <span style={{color: "red"}}> (*)</span>:
                                        </label>
                                    </div>
                                    <div className="col-lg-8">
                                        <select id="gender" className="form-select" value={formik.values.gender}
                                                onChange={formik.handleChange} name="gender">
                                            <option value="null">--Xin chọn giới tính--</option>
                                            <option value={"True"}>Nam</option>
                                            <option value={"False"}>Nữ</option>
                                            <option value={"Other"}>Khác</option>
                                        </select>
                                        {formik.errors.gender && formik.touched.gender ?
                                            <span style={{color: "red"}}>{formik.errors.gender}</span> :
                                            <span><br/></span>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt-1">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <label className="form-label mt-2">
                                            ID Card
                                            <span style={{color: "red"}}> (*)</span>:
                                        </label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="number"
                                               name="idCard"
                                               className="form-control"
                                               value={formik.values.idCard}
                                               onChange={formik.handleChange}
                                               placeholder="Nhập idCard tại đây."/>
                                        {formik.errors.idCard && formik.touched.idCard ?
                                            <span style={{color: "red"}}>{formik.errors.idCard}</span> :
                                            <span><br/></span>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt-1">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <label className="form-label mt-2">
                                            Phone
                                            <span style={{color: "red"}}> (*)</span>:
                                        </label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="number"
                                               name="phoneNumber"
                                               className="form-control"
                                               value={formik.values.phoneNumber}
                                               onChange={formik.handleChange}
                                               placeholder="Nhập phone tại đây."/>
                                        {formik.errors.phoneNumber && formik.touched.phoneNumber ?
                                            <span style={{color: "red"}}>{formik.errors.phoneNumber}</span> :
                                            <span><br/></span>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt-1">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <label className="form-label mt-2">
                                            Address
                                            <span style={{color: "red"}}> (*)</span>:
                                        </label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text"
                                               name="address"
                                               className="form-control"
                                               value={formik.values.address}
                                               onChange={formik.handleChange}
                                               placeholder="Nhập address tại đây."/>
                                        {formik.errors.address && formik.touched.address ?
                                            <span style={{color: "red"}}>{formik.errors.address}</span> :
                                            <span><br/></span>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt-1">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <label className="form-label mt-2">
                                            Customer Types
                                            <span style={{color: "red"}}> (*)</span>:
                                        </label>
                                    </div>
                                    <div className="col-lg-8">
                                        <select id="customerType" name="customerType"
                                                className="form-select" onChange={formik.handleChange}>
                                            <option value="">--Select customer type--</option>
                                            {customerTypeList.map(customerType => (
                                                <option key={customerType.id} value={JSON.stringify(customerType)}>
                                                    {customerType.name}
                                                </option>
                                            ))}
                                        </select>
                                        {formik.errors.customerType && formik.touched.customerType ?
                                            <span style={{color: "red"}}>{formik.errors.customerType}</span> :
                                            <span><br/></span>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center" style={{marginBottom: "15px"}}>
                                <button type="submit" className="btn" style={{backgroundColor: "teal"}}>Thêm mới
                                </button>
                                <button style={{marginLeft: "15px", backgroundColor: "#8F8248"}} type="reset"
                                        className="btn">Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}
