// class Bars extends React.Component {

//   getInitalState() {
//     return {
//       bars: this.props.bars
//     }
//   }

//   render () {
//     var self = this
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8">
//             <h1>Please Show Up</h1>
//             <table className="table table-hover">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Address</th>
//                   <th>Phone</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 { self.state.bars.map((bar) => {
//                   return (
//                     <Bar key={ bar.id } bar={ bar } />
//                   )
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// Bars.propTypes = {
//   bars: React.PropTypes.array
// };
