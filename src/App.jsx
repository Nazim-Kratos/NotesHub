
import React, { useState } from 'react'

const App = () => {
  const [Note, setNote] = useState('')
  const [Note1, setNote1] = useState('')
  const [Notes, setNotes] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!Note.trim() || !Note1.trim()) return 0;

    const newNote = {
      id: Date.now(),
      Heading: Note,
      Description: Note1,
      isCompleted: false
    }

    setNotes([...Notes, newNote]);
    setNote('')
    setNote1('')
  }

  const HandleDelete = (id) => {
    const NewNotes = Notes.filter((note => {
      return note.id !== id;
    }))
    setNotes(NewNotes);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen divide-y-2 md:divide-y-0 md:divide-x-2 divide-black bg-[#ECFDF5]">

        {/* Left Side - Input Boxes */}
        <div className="w-full md:w-1/2 p-5 sm:p-8 lg:p-12">

          <form onSubmit={(e) => { HandleSubmit(e) }}>

            <h1 className='mx-2 my-4 font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight'>
              Notes App
            </h1>

            <p className="mx-2 mb-8 text-gray-500 text-sm sm:text-base">
              Write down your thoughts and keep them organized.
            </p>

            <div className="w-full max-w-xl p-2 sm:p-4">

              <div className='flex flex-col gap-2 my-5'>

                <label className="font-semibold text-gray-700">
                  Note Heading
                </label>

                <input
                  className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                  type="text"
                  placeholder='Enter Notes Heading'
                  value={Note}
                  onChange={(e) => {
                    setNote(e.target.value)
                  }}
                />

              </div>

              <div className='flex flex-col gap-2 my-5'>

                <label className="font-semibold text-gray-700">
                  Note Description
                </label>

                <textarea
                  className="w-full min-h-40 resize-y border border-gray-300 bg-white rounded-xl px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                  name=""
                  id=""
                  placeholder='Enter Notes Details Here'
                  value={Note1}
                  onChange={(e) => {
                    setNote1(e.target.value)
                  }}
                ></textarea>

              </div>

              <div>
                <button
                  className='w-full sm:w-auto px-10 py-3 mx-0 sm:mx-0 rounded-xl bg-black text-white font-semibold shadow-md transition duration-200 hover:bg-gray-800 hover:shadow-lg active:scale-95'
                  onClick={HandleSubmit}
                >
                  + Add Note
                </button>
              </div>

            </div>
          </form>
        </div>

        {/* Right Side - Display Notes */}
        <div className="w-full md:w-1/2 p-5 sm:p-8 lg:p-10">

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Your Notes
          </h2>

          <p className="text-gray-500 text-sm mb-8">
            Keep track of everything important.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 content-start">

            {Notes.length == 0 && (
              <div className='col-span-full flex flex-col items-center justify-center min-h-60 rounded-2xl border-2 border-dashed border-gray-300 bg-white p-8 text-center'>

                <div className="text-5xl mb-4">
                  📝
                </div>

                <h3 className="text-xl font-bold text-gray-700">
                  Nothing to show
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Your notes will appear here once you add them.
                </p>

              </div>
            )}

            {Notes.map((item) => (

              <div
                key={item.id}
                className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col min-w-0"
              >

                <div className="overflow-hidden rounded-xl mb-4">

                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQar1x0KkLGU_F-RLcJ1YOeGemg79nzTCavWspI42a0kw&s=10"
                    alt="Note"
                    className="h-32 w-full object-cover"
                  />

                </div>

                <h1 className='font-bold text-lg sm:text-xl font-serif text-gray-900 break-words mb-2'>
                  {item.Heading}
                </h1>

                <h2 className='text-sm sm:text-base text-gray-600 leading-relaxed break-words flex-1'>
                  {item.Description}
                </h2>

                <button
                  className='mt-5 w-full rounded-xl bg-red-50 border border-red-200 text-red-600 py-2.5 font-semibold transition duration-200 hover:bg-red-600 hover:text-white active:scale-95'
                  onClick={() => {
                    HandleDelete(item.id)
                  }}
                >
                  Delete Note
                </button>

              </div>

            ))}

          </div>
        </div>

      </div>
    </>
  )
}

export default App
