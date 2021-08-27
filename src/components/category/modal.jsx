// import React ,{useState}from 'react';
// // import {render} from 'react-dom';
// import ReactDOM from 'react-dom';
// import { Modal} from 'react-bootstrap';
// import { makeStyles } from '@material-ui/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import './modal.css'

// function MyVerticallyCenteredModal(props) {
//   const [file, setFile] = React.useState(null)

//     const iconview = (e) => {
//         setFile(e.target.files[0])
//     }
//   return (

//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered>
//       <div className="formdiv">
//                     <form classname="form">
//                     <p>Category Name:</p>
//                     <input type='text' name='categoryname'/>
//                     <p>Category Icon</p>
//                     <img id="icon" src={file? URL.createObjectURL(file) : null} alt={file? file.name : null}/>
//                     <input type='file' name='categoryicon'  onChange={iconview}/>
//                     <br/>
//                     <button type="submit">Submit</button>
//                     </form>

//                 </div>

//     </Modal>
//   );

// }

// export default function ModalView() {
//   const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     },
//   });
//   const [modalShow, setModalShow] = React.useState(false);
//   const classes = useStyles();

//   const handleClose = () => setModalShow(false);
//   const handleShow = () => setModalShow(true);

//   const rows = [
//       {
//           name:'category 1',
//           image: '../../assets/images/images.jpg',
//       },
//       {
//         name:'category 1',
//         image: '../../assets/images/images.jpg',
//     },
//     {
//       name:'category 1',
//       image: '../../assets/images/images.jpg',
//     },
//     {
//       name:'category 1',
//       image: '../../assets/images/images.jpg',
//     },
//     {
//       name:'category 1',
//       image: '../../assets/images/images.jpg',
//     },
//     {
//       name:'category 1',
//       image: '../../assets/images/images.jpg',
//     },
//     {
//       name:'category 1',
//       image: '../../assets/images/images.jpg',
//     },
//     {
//       name:'category 1',
//       image: '../../assets/images/images.jpg',
//     },

//   ];

//   return (
//     <div>
//       <div className="table">
//       <TableContainer component={Paper}>
//       <Table className={classes.table} >
//         <TableHead>
//           <TableRow className="tableRow">
//             <TableCell >NAME</TableCell>
//             <TableCell >ICON</TableCell>
//             <TableCell ><i className="fas fa-plus" onClick={handleShow}></i></TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((set) => (
//             <TableRow key={set.name}>
//               <TableCell component="th" scope="row" >{set.name}</TableCell>
//               <TableCell ><img className="icon" src={set.image} alt="" srcset="" /></TableCell>
//               <TableCell ><i className="fas fa-times"></i></TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </div>
//   );
// }
// ReactDOM.render(
// <React.StrictMode>
//   <ModalView/>
// </React.StrictMode>, document.getElementById('root'));

// // render(<ModalView />);
