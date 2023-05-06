import React from 'react'

function ToDo() {
  return (
    <div className="project">
    <h2>To do List</h2>
    <table>
      <tbody>
      <tr>
        <th>sn</th>
        <th>Task Name</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
        <tr>
          <td>1</td>
          <td>School Admission system</td>
          <td>Not Completed</td>
          <td>view icon,invite icon,update icon,delete icon </td>
        </tr>

      </tbody>
      </table>
  </div>
  )
}

export default ToDo