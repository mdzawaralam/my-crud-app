import './Page.css';

function AI() {
  return (
    <div className="page">
      <h1>AI Insights</h1>
      <p className="page-intro">
        Explore our AI-powered ideas, use cases, and sample data for modern automation.
      </p>
      <div className="page-content">
        <h2>What is AI?</h2>
        <p>
          Artificial Intelligence (AI) refers to systems that can perform tasks that normally require human intelligence.
          This includes natural language processing, decision making, pattern recognition, and automation of routine work.
        </p>
        <h2>AI Features</h2>
        <ul>
          <li>Smart recommendations based on user behavior</li>
          <li>Automated content generation and summarization</li>
          <li>Predictive analytics for faster decision-making</li>
          <li>Conversational interfaces and chatbot assistants</li>
        </ul>
        <h2>Dummy AI Data</h2>
        <table className="page-table">
          <thead>
            <tr>
              <th>Model</th>
              <th>Use Case</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ChatAssist v1</td>
              <td>Customer support automation</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>VisionSense</td>
              <td>Image analysis and tagging</td>
              <td>In development</td>
            </tr>
            <tr>
              <td>PredictFlow</td>
              <td>Sales forecasting</td>
              <td>Testing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AI;
