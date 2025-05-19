import React, { useState } from "react";
import { useFormGraph } from "../hooks/useFormGraph";

const FormList: React.FC = () => {
  const { graph, loading } = useFormGraph();
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);

  if (loading) return <p>Loading forms...</p>;
  if (!graph) return <p>No form data found.</p>;

  const selectedForm = graph.nodes.find((n) => n.id === selectedFormId);

  return (
    <div>
      <h2>Forms</h2>
      <ul>
        {graph.nodes.map((node) => (
          <li key={node.id}>
            <button onClick={() => setSelectedFormId(node.id)}>
              {node.id}
            </button>
          </li>
        ))}
      </ul>

      {selectedForm && (
        <div style={{ marginTop: "2rem" }}>
          <h3>Fields in {selectedForm.id}</h3>
          <table border={1} cellPadding={8}>
            <thead>
              <tr>
                <th>Field</th>
                <th>Prefill From</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedForm.fields.map((field) => (
                <tr key={field}>
                  <td>{field}</td>
                  <td>–</td> {/* Will later show where it's prefilling from */}
                  <td>
                    <button>Configure</button>
                    <button style={{ marginLeft: '8px' }}>❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FormList;
