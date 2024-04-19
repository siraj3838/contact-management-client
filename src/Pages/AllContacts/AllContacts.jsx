import useContacts from "../../Hook/useContacts";
import { FaPencil } from "react-icons/fa6";
import { HiMiniTrash } from "react-icons/hi2";
import useAxios from "../../Hook/useAxios";
import toast, { Toaster } from "react-hot-toast";
import { TfiClose } from "react-icons/tfi";

// import toast from "react-hot-toast";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useRef } from "react";

const image_hosting_api = `https://api.imgbb.com/1/upload?key=70d78c25064c03ace2c980e0c9da5a04`;

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


const AllContacts = () => {
    const [contacts, refetch] = useContacts();
    const { register, handleSubmit} = useForm();
    //   console.log(contacts);
    const myAxios = useAxios();
    const handleDelete = id => {
        myAxios.delete(`/contacts/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.success('This Contact Deleted')
                    refetch();
                }
            })
    }
    
    const onSubmit = async (data) => {
        try {
            const date = new Date();
            const formData = new FormData();
            formData.append('image', data.photo[0]);
            // Add other form data fields as needed
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('phone', data.phone);
            formData.append('address', data.address);
    
            // Upload image file
            const resImage = await myAxios.post(image_hosting_api, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
    
            if (resImage.data.success) {
                const contactInfo = {
                    name: data?.name,
                    email: data?.email,
                    phone: data?.phone,
                    address: data?.address,
                    photo: resImage.data.data.display_url,
                    date: date,
                };
                console.log("Form Data:", data);
                console.log("Contact Info:", contactInfo);
    
                // Update contact information
            const updateRes = await myAxios.put(`/contacts/${data?.id}`, contactInfo);
            if (updateRes.data.modifiedCount > 0) {
                toast.success('This Contact Updated Successfully');
                refetch();
            } else {
                toast.error('Sorry, there was a problem updating the contact.');
            }

            } else {
                toast.error('Failed to upload image.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('An unexpected error occurred. Please try again later.');
        }
    };
    



    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-[200px] pb-16 pt-16 bg-gray-100 min-h-screen">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-200">
                    {/* head */}
                    <thead>
                        <tr className="text-sm md:text-lg bg-gray-200">
                            <th className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4">Image</th>
                            <th className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 border-l border-gray-200 text-center">Name</th>
                            <th className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 border-l border-gray-200 text-center">Address</th>
                            <th className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 border-l border-r border-gray-200 text-center">E-mail</th>
                            <th className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 border-l border-gray-200 text-center">Number</th>
                            <th className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-center">Customize</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((item) => (
                            <tr key={item._id} className="text-base md:text-lg lg:text-xl bg-blue-200 rounded-md border-2">
                                <td className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4">
                                    <img className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded" src={item?.photo} alt="" />
                                </td>
                                <td className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-center">
                                    <h3 className="text-sm md:text-lg font-semibold">{item?.name}</h3>
                                    <h4 className="text-xs md:text-sm">{item?.date?.split("T")[0]}</h4>
                                </td>
                                <td className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-center text-sm md:text-base font-semibold">{item?.address}</td>
                                <td className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-center text-sm md:text-base font-semibold">{item?.email}</td>
                                <td className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-center text-sm md:text-base font-semibold">{item?.phone}</td>
                                <td className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-center text-sm md:text-base font-semibold">
                                    <details className="dropdown flex justify-center">
                                        <summary className="bg-[#fff] text-gray-600 font-semibold border-2 border-[#1655EF] py-2 px-3 rounded-md hover:border-2 hover:bg-[#1655EF] hover:text-white duration-500 text-sm cursor-pointer">Menu</summary>
                                        <ul className="shadow menu dropdown-content z-50 bg-base-100 w-full cursor-pointer">
                                            <li>
                                                <a className="flex items-center gap-2" onClick={() => {
                                                    document.getElementById(item?._id).showModal();
                                                }}>
                                                    <FaPencil /> Edit
                                                    <dialog id={item._id} className="modal modal-bottom sm:modal-middle px-5 md:px-0">
                                                        <div className="modal-box 2xl:px-10 md:py-7">
                                                            <div className='flex justify-end items-center mb-5'>
                                                                <div className="modal-action mt-0">
                                                                    <form method="dialog">
                                                                        <button className="text-black text-xl"><TfiClose /></button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <form onSubmit={handleSubmit(onSubmit)} className="font-medium">
                                                                <h3 className="text-center text-xl xl:text-4xl font-semibold pb-4">Update This Contact</h3>
                                                                <h3>{item?._id}</h3>
                                                                <hr />
                                                                <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                                                                    <div className="flex-1 w-full">
                                                                        <label className="label w-full flex items-center gap-2 text-gray-600">
                                                                            New Full Name
                                                                            <span className="text-red-700">*</span>
                                                                        </label>
                                                                        <input type="text" {...register('name')} placeholder="Enter New Name" className="w-full py-1 px-5 border text-sm border-[#1655EF] focus:outline-[#1655EF] mt-2" />
                                                                    </div>
                                                                    <div className="flex-1 w-full hidden">
                                                                        <label className="label w-full flex items-center gap-2 text-gray-600">
                                                                            New Full Name
                                                                            <span className="text-red-700">*</span>
                                                                        </label>
                                                                        <input ref={useRef} type="text" {...register('id')} placeholder="Enter New Name" className="w-full py-1 px-5 border text-sm border-[#1655EF] focus:outline-[#1655EF] mt-2" defaultValue={item?._id} />
                                                                    </div>
                                                                    <div className="flex-1 w-full">
                                                                        <label className="label w-full flex items-center gap-2 text-gray-600">
                                                                            New E-mail Address
                                                                            <span className="text-red-700">*</span>
                                                                        </label>
                                                                        <input type="email" {...register('email')} placeholder="Enter New E-mail" className="w-full py-1 px-5 border text-sm border-[#1655EF] focus:outline-[#1655EF] mt-2" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                                                                    <div className="flex-1 w-full">
                                                                        <label className="label w-full flex items-center gap-2 text-gray-600">
                                                                            New Phone Number
                                                                            <span className="text-red-700">*</span>
                                                                        </label>
                                                                        <input type="number" {...register('phone')} placeholder="Enter New Phone Number" className="w-full py-1 px-5 border text-sm border-[#1655EF] focus:outline-[#1655EF] mt-2" />
                                                                    </div>
                                                                    <div className="flex-1 w-full">
                                                                        <label className="label w-full flex items-center gap-2 text-gray-600">
                                                                            New Current Address
                                                                            <span className="text-red-700">*</span>
                                                                        </label>
                                                                        <input type="text" {...register('address')} placeholder="Enter New Address" className="w-full py-1 px-5 border text-sm border-[#1655EF] focus:outline-[#1655EF] mt-2" />
                                                                    </div>
                                                                </div>
                                                                <div className="mt-4 w-full">
                                                                    <div className="w-1/2 pr-3">
                                                                        <label className="label w-full flex items-center gap-2 text-gray-600">
                                                                            New Photo
                                                                            <span className="text-red-700">*</span>
                                                                        </label>
                                                                        <Button
                                                                            component="label"
                                                                            role={undefined}
                                                                            variant="contained"
                                                                            tabIndex={-1}
                                                                            startIcon={<CloudUploadIcon />}
                                                                            style={{ width: '100%', padding: '4px 0', margin: '6px 0px' }}
                                                                        >
                                                                            Upload file
                                                                            <VisuallyHiddenInput type="file" {...register('photo')} />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-6 flex justify-center">
                                                                    <button type="submit" className="bg-[#fff] text-gray-600 font-semibold border-2 border-[#1655EF] py-2 px-5 rounded-md hover:border-2 hover:bg-[#1655EF] hover:text-white duration-500">Update Contact</button>
                                                                </div>
                                                            </form>


                                                        </div>
                                                    </dialog>
                                                </a>
                                            </li>
                                            <li onClick={() => handleDelete(item?._id)}><a className="flex items-center gap-2"><HiMiniTrash /> Delete</a></li>
                                        </ul>
                                    </details>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllContacts;
