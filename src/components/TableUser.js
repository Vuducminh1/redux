import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchAllUser } from "../action/actions";

const TableUser = (props) => {

    // const [listUsers, setListUsers] = useState();

    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.user.listUsers);
    const isLoading = useSelector((state) => state.user.isLoading);
    const isError = useSelector((state) => state.user.isError);
    console.log("test")

    // const fetchAllUser = async () => {
    //     const res = await axios.get("http://localhost:8080/users/all");
    //     const data = res && res.data ? res.data : []
    //     // console.log("check",data)
    //     setListUsers(data);
    // }

    useEffect(() => {
        dispatch(fetchAllUser());
    }, [])

    const handleDeleteUser = (user) => {
        dispatch(deleteUser(user.id))
    }
    // if (isError === false && isLoading === true) {
    //     return (
    //         <Container>
    //             <hr />
    //             <Table striped bordered hover>
    //                 <thead>
    //                     <tr>
    //                         <th>#</th>
    //                         <th>Email</th>
    //                         <th>Username</th>
    //                         <th>Actions</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <div>Loading data ...</div>
    //                 </tbody>
    //             </Table>
    //         </Container>
    //     )
    // }

    // if (isError === false && isLoading === false) {
    //     return (
    //         <Container>
    //             <hr />
    //             <Table striped bordered hover>
    //                 <thead>
    //                     <tr>
    //                         <th>#</th>
    //                         <th>Email</th>
    //                         <th>Username</th>
    //                         <th>Actions</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
    //                         return (
    //                             <tr key={`users-${index}`}>
    //                                 <td>{index + 1}</td>
    //                                 <td>{item.email}</td>
    //                                 <td>{item.username}</td>
    //                                 <td>
    //                                     <button
    //                                         className="btn btn-danger"
    //                                         onClick={() => handleDeleteUser(item)}>Delete</button>
    //                                 </td>
    //                             </tr>)
    //                     })}
    //                 </tbody>

    //             </Table>
    //         </Container>
    //     )
    // }

    // if (isError === true && isLoading === false) {
    //     return (
    //         <Container>
    //             <hr />
    //             <Table striped bordered hover>
    //                 <thead>
    //                     <tr>
    //                         <th>#</th>
    //                         <th>Email</th>
    //                         <th>Username</th>
    //                         <th>Actions</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <div>Something wrong, please try again </div>
    //                 </tbody>
    //             </Table>
    //         </Container>
    //     )
    // }
    return (
        <Container>
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === true ?
                        <>
                            <div>Something wrong, please try again </div>
                        </>
                        :
                        <>
                            {isLoading === true ?
                                <>
                                    <div>Loading data ...</div>
                                </>
                                :
                                <> {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                                    return (
                                        <tr key={`users-${index}`}>
                                            <td>{index + 1}</td>
                                            <td>{item.email}</td>
                                            <td>{item.username}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDeleteUser(item)}>Delete</button>
                                            </td>
                                        </tr>)
                                })}</>}

                        </>}


                </tbody>
            </Table>
        </Container>
    )
}

export default TableUser;