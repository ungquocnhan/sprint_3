import React from "react";
import './Card.css';
import {toast} from "react-toastify";
import Swal from 'sweetalert';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
function handleClick() {
    if (Notification.permission === 'granted') {
        new Notification('Thông báo', {
            body: 'Đây là nội dung của thông báo',
            image: 'https://thuvienanime.com/wp-content/uploads/2022/04/Naruto.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        });
    } else {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification('Thông báo', {
                    body: 'Đây là nội dung của thông báo ',
                    icon: 'path/to/icon.png'
                });
            }
        });
    }
}
class Card extends React.Component {
    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Info message');
                    break;
                case 'success':
                    NotificationManager.success('Success message', 'Title here');
                    break;
                case 'warning':
                    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                    break;
                case 'error':
                    NotificationManager.error('Error message', 'Click me!', 5000, () => {
                        alert('callback');
                    });
                    break;
            }
        }
    }
    handleClick = () => {
        // Swal("Good job!", "You clicked the button!", "error");
        // Swal("Click on either the button or outside the modal.")
        //     .then((value) => {
        //         Swal(`The returned value is: ${value}`);
        //     });
        Swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    Swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    Swal("Your imaginary file is safe!");
                }
            });
    };
    notify = () => toast("Wow so easy!", {
        type: "warning",
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card--header" />
                    <img
                        className="avatar"
                        src="https://thuvienanime.com/wp-content/uploads/2022/04/Naruto.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="avatar"
                    />
                    <div className="card--body">
                        <div>
                            <p className="text-header">NhanUQ</p>
                            <p className="text-sub">
                                Developer
                            </p>
                            <div>
                                <button className="btnc third" onClick={this.notify}>FOLLOW</button>
                                <button className="btnc third" onClick={this.handleClick}>FOLLOW</button>
                                <button className="btnc third" onClick={handleClick}>FOLLOW</button>
                                <button className="btnc third" onClick={this.createNotification('error')}>FOLLOW</button>
                                <NotificationContainer />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;
