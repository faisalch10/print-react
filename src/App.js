import PdfComponent from './components/PdfComponent';
import './index.css';
const inspectionData = {
  id: '09fdfa4c-531e-485b-8f32-889fd7a74c43',
  systemId: '730dd1f8-ea46-4720-8cc0-3afaf45ad79c',
  status: 'active',
  step: null,
  inspectionGroupId: null,
  checklistSnapshotId: '61f8e6b7-dd4e-48d4-bf2d-536527c52057',
  assignedTo: '9f8d50bd-99d4-4249-b534-4c291c8515f4',
  dueDate: '2024-07-06T05:58:23.000Z',
  title: 'Inspection 1',
  createdAt: '2024-06-06T06:50:35.437Z',
  updatedAt: '2024-06-06T06:50:35.437Z',
  companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
  description: 'Description Testing',
  createdBy: 'f76feb83-c669-49d3-a42f-0defa471a5d5',
  system: {
    id: '730dd1f8-ea46-4720-8cc0-3afaf45ad79c',
    status: 'Abandoned',
    type: 'underground',
  },
  inspectionAttribute: [],
  inspectionGroup: null,
  checklist: {
    id: '61f8e6b7-dd4e-48d4-bf2d-536527c52057',
    companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
    checklistId: '3b3d1de8-6b24-409c-8f14-76faef930c1a',
    snapshot: {
      id: '3b3d1de8-6b24-409c-8f14-76faef930c1a',
      name: 'Checklist 2',
      siteId: 'd1494e3e-faf0-4059-ad0a-40dd357989f3',
      status: 'active',
      sections: [
        {
          id: '3e879b0a-615d-4cd1-91a8-b7dbc237a8c8',
          name: 'Section 001!!',
          order: 1,
          companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
          createdAt: '2024-06-06T06:45:24.001Z',
          questions: [
            {
              id: 'cf2bb139-cc06-48b4-9f1c-3802fbc0164d',
              type: 'number',
              items: [],
              order: null,
              title: 'Tank Capacity!!',
              required: true,
              companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
              createdAt: '2024-06-06T06:45:24.011Z',
              sectionId: '3e879b0a-615d-4cd1-91a8-b7dbc237a8c8',
              updatedAt: '2024-06-06T06:45:24.011Z',
            },
            {
              id: '7591d26b-b0a8-4505-b063-d971f8cc78dc',
              type: 'select!',
              items: ['above ground', 'under ground'],
              order: null,
              title: 'Piping!',
              required: false,
              companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
              createdAt: '2024-06-06T06:45:24.018Z',
              sectionId: '3e879b0a-615d-4cd1-91a8-b7dbc237a8c8',
              updatedAt: '2024-06-06T06:45:24.018Z',
            },
            {
              id: '1fb76514-4254-458c-ab50-47d43bb65f52',
              type: 'radio',
              items: ['yes', 'no'],
              order: null,
              title: 'condition of tank!',
              required: false,
              companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
              createdAt: '2024-06-06T06:45:24.024Z',
              sectionId: '3e879b0a-615d-4cd1-91a8-b7dbc237a8c8',
              updatedAt: '2024-06-06T06:45:24.024Z',
            },
            {
              id: '596d494b-bf4c-43bb-bba7-bdee726d055e',
              type: 'number',
              items: [],
              order: null,
              title: 'Tank Capacity!!',
              required: true,
              companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
              createdAt: '2024-06-06T06:45:24.028Z',
              sectionId: '3e879b0a-615d-4cd1-91a8-b7dbc237a8c8',
              updatedAt: '2024-06-06T06:45:24.028Z',
            },
            {
              id: 'f482de91-87bc-4a90-9a32-959e64454461',
              type: 'select!',
              items: ['above ground', 'under ground'],
              order: null,
              title: 'Piping!',
              required: false,
              companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
              createdAt: '2024-06-06T06:45:24.031Z',
              sectionId: '3e879b0a-615d-4cd1-91a8-b7dbc237a8c8',
              updatedAt: '2024-06-06T06:45:24.031Z',
            },
            {
              id: 'a67ec61e-6d7e-46d8-898d-35c0dab3fc3b',
              type: 'radio',
              items: ['yes', 'no'],
              order: null,
              title: 'condition of tank!',
              required: false,
              companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
              createdAt: '2024-06-06T06:45:24.035Z',
              sectionId: '3e879b0a-615d-4cd1-91a8-b7dbc237a8c8',
              updatedAt: '2024-06-06T06:45:24.035Z',
            },
          ],
          updatedAt: '2024-06-06T06:45:24.001Z',
          checklistId: '3b3d1de8-6b24-409c-8f14-76faef930c1a',
          description: 'This is section 1!!',
        },
        {
          id: 'f2a67044-df03-4a54-90be-bfa412804d81',
          name: 'Section 002!',
          order: 2,
          companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
          createdAt: '2024-06-06T06:45:24.040Z',
          questions: [
            {
              id: '7be33c23-0fd4-4b4e-ae53-d34ae2c34735',
              type: 'multiSelect',
              items: ['Option1', 'Option2', 'Option3', 'Option4'],
              order: null,
              title: 'Title!!',
              required: false,
              companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
              createdAt: '2024-06-06T06:45:24.044Z',
              sectionId: 'f2a67044-df03-4a54-90be-bfa412804d81',
              updatedAt: '2024-06-06T06:45:24.044Z',
            },
            {
              id: '68da3b4c-2e1e-498b-aaf1-d16aded36d9a',
              type: 'text',
              items: [],
              order: null,
              title: 'text!!',
              required: true,
              companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
              createdAt: '2024-06-06T06:45:24.047Z',
              sectionId: 'f2a67044-df03-4a54-90be-bfa412804d81',
              updatedAt: '2024-06-06T06:45:24.047Z',
            },
            {
              id: '85af25a1-2374-4517-a166-39fd2231b524',
              type: 'textArea',
              items: [],
              order: null,
              title: 'Comments',
              required: true,
              companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
              createdAt: '2024-06-06T06:45:24.050Z',
              sectionId: 'f2a67044-df03-4a54-90be-bfa412804d81',
              updatedAt: '2024-06-06T06:45:24.050Z',
            },
            {
              id: '0eaa7e2e-ad27-4882-bf03-b5f27d1a6aad',
              type: 'date',
              items: [],
              order: null,
              title: 'Year of installation',
              required: true,
              companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
              createdAt: '2024-06-06T06:45:24.052Z',
              sectionId: 'f2a67044-df03-4a54-90be-bfa412804d81',
              updatedAt: '2024-06-06T06:45:24.052Z',
            },
            {
              id: '4a7d727e-5936-47b2-b16b-c5fd6e0a266e',
              type: 'multiSelect',
              items: ['Option1', 'Option2', 'Option3', 'Option4'],
              order: null,
              title: 'Title!!',
              required: false,
              companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
              createdAt: '2024-06-06T06:45:24.057Z',
              sectionId: 'f2a67044-df03-4a54-90be-bfa412804d81',
              updatedAt: '2024-06-06T06:45:24.057Z',
            },
            {
              id: '6b2fa4c1-bed4-44be-a38c-461cae09c146',
              type: 'text',
              items: [],
              order: null,
              title: 'text!!',
              required: true,
              companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
              createdAt: '2024-06-06T06:45:24.060Z',
              sectionId: 'f2a67044-df03-4a54-90be-bfa412804d81',
              updatedAt: '2024-06-06T06:45:24.060Z',
            },
            {
              id: '1d589805-c7c6-48e3-88b6-a9c36a5b97ca',
              type: 'textArea',
              items: [],
              order: null,
              title: 'Comments',
              required: true,
              companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
              createdAt: '2024-06-06T06:45:24.062Z',
              sectionId: 'f2a67044-df03-4a54-90be-bfa412804d81',
              updatedAt: '2024-06-06T06:45:24.062Z',
            },
            {
              id: '78c3869a-7d41-4d26-b094-155d212ab01a',
              type: 'date',
              items: [],
              order: null,
              title: 'Year of installation',
              required: true,
              companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
              createdAt: '2024-06-06T06:45:24.065Z',
              sectionId: 'f2a67044-df03-4a54-90be-bfa412804d81',
              updatedAt: '2024-06-06T06:45:24.065Z',
            },
          ],
          updatedAt: '2024-06-06T06:45:24.040Z',
          checklistId: '3b3d1de8-6b24-409c-8f14-76faef930c1a',
          description: 'This is section 2',
        },
        {
          id: '1946b6df-6783-404d-8ed3-0c3c39df68f2',
          name: 'Section 001!!',
          order: 1,
          companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
          createdAt: '2024-06-06T06:45:24.068Z',
          questions: [],
          updatedAt: '2024-06-06T06:45:24.068Z',
          checklistId: '3b3d1de8-6b24-409c-8f14-76faef930c1a',
          description: 'This is section 1!!',
        },
      ],
      companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
      createdAt: '2024-06-06T06:45:23.987Z',
      createdBy: 'f76feb83-c669-49d3-a42f-0defa471a5d5',
      updatedAt: '2024-06-06T06:45:23.987Z',
      description: 'Checklist for inspections!!2',
    },
    createdAt: '2024-06-06T06:50:35.434Z',
    updatedAt: '2024-06-06T06:50:35.434Z',
  },
  assignedUser: {
    name: 'Testing User',
    email: 'talhasaleem+1@hashlogics.com',
    role: {
      name: 'Admin',
    },
  },
  questionResponse: [
    {
      id: 'a8f2559b-a9a5-4208-8dfe-27f78f448d60',
      inspectionId: '09fdfa4c-531e-485b-8f32-889fd7a74c43',
      questionId: '0eaa7e2e-ad27-4882-bf03-b5f27d1a6aad',
      answer: 'Answer',
      flag: null,
      img: null,
      companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
      createdAt: '2024-06-06T07:01:35.979Z',
      updatedAt: '2024-06-06T07:01:35.979Z',
    },
    {
      id: '9c3afc83-a4ab-4c8b-9a4c-09c02da6b89d',
      inspectionId: '09fdfa4c-531e-485b-8f32-889fd7a74c43',
      questionId: '1d589805-c7c6-48e3-88b6-a9c36a5b97ca',
      answer: 'Answer 2',
      flag: null,
      img: null,
      companyId: 'd477443f-7a1a-4d5f-84c3-e7fa24517d69',
      createdAt: '2024-06-06T07:18:54.717Z',
      updatedAt: '2024-06-06T07:18:54.717Z',
    },
  ],
};

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <button onClick={handlePrint}>Print Demo</button>
      <div className='print'>
        <PdfComponent handlePrint={() => {}} inspectionData={inspectionData} />
      </div>
      <h3>HelloWorld</h3>
    </div>
  );
}

export default App;
