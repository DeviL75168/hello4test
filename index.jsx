
function generateStudentReport() {
  let reportHTML = `
    <h3>Student Wise Report</h3>
    <table class="report-table">
      <thead>
        <tr>
          <th>Student</th>
          <th>Grade</th>
          <th>Monthly Fee</th>
          <th>Annual Status</th>
          <th>Total Paid</th>
        </tr>
      </thead>
      <tbody>
  `;
  
  students.forEach(student => {
    const studentPayments = payments.filter(p => p.studentId == student.id);
    const totalPaid = studentPayments.reduce((sum, payment) => sum + payment.amount, 0);
    
    reportHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.grade}</td>
        <td>₹${student.monthlyFee.toLocaleString()}</td>
        <td>${student.annualPaymentStatus === 'paid' ? 'Paid' : 'Pending'}</td>
        <td>₹${totalPaid.toLocaleString()}</td>
      </tr>
    `;
  });
  
  reportHTML += `
      </tbody>
    </table>
  `;
  
  return reportHTML;
}