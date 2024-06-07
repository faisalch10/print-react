import logo from '../assets/Logo.svg';

const PdfComponent = ({ inspectionData, handlePrint }) => {
  const modifyQuestionResponseStructure = data => {
    return data.reduce((acc, curr) => {
      acc[curr.questionId] = curr;
      return acc;
    }, {});
  };

  const inspection = {
    ...inspectionData,
    questionResponse: modifyQuestionResponseStructure(
      inspectionData.questionResponse
    ),
  };

  return (
    <>
      <div id='section-to-print'>
        <div className='w-2/3 mx-auto mt-10 p-3'>
          <img src={logo} width='200' alt='logo' className='mx-auto' />

          <div className='flex justify-between mt-5'>
            <div>
              <h6 className='text-lg font-bold dark:text-white'>
                Inspector Name
              </h6>
              <p>John Smith</p>
            </div>
            <div>
              <h6 className='text-lg font-bold dark:text-white'>Start Date</h6>
              <p>24 May, 2024</p>
            </div>
          </div>
        </div>

        {/* SECTION */}
        {inspection.checklist.snapshot.sections.map(section => {
          return (
            <div
              className='bg-gray-100 px-4 rounded-md mt-3 py-4 mx-auto'
              key={section.id}
            >
              <h6 className='font-bold dark:text-white text-base'>
                Safety Information:
              </h6>
              <div className='grid grid-cols-2 gap-4 mt-5'>
                {section.questions.map(question => {
                  return (
                    <div key={question.id}>
                      <h6 className='font-normal dark:text-white text-sm text-slate-400'>
                        {question.title}
                      </h6>
                      <small>
                        {inspection.questionResponse[question?.id]?.answer ||
                          'None'}
                      </small>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={handlePrint}
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      >
        Print
      </button>
    </>
  );
};

export default PdfComponent;
