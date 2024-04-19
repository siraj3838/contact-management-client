// import toast from "react-hot-toast";
import { Button } from "@mui/material";
import useAxios from "../../Hook/useAxios";
import { useForm } from "react-hook-form";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import toast, { Toaster } from "react-hot-toast";
import useContacts from "../../Hook/useContacts";

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



const AddContacts = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const myAxios = useAxios();
    const [refetch] = useContacts();
    const onSubmit = async (data) => {
        // console.log(data)
        const date = new Date();
        const imageFile = { image: data.photo[0] }
        const resImage = await myAxios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        if (resImage.data.success) {
            // console.log(resImage.data.data.display_url);
            const contactInfo = {
                name: data?.name,
                email: data?.email,
                phone: data?.phone,
                address: data?.address,
                photo: resImage.data.data.display_url,
                date: date
            }
            const res = await myAxios.post('/contacts', contactInfo)
            // console.log(res.data);
            if (res.data?.insertedId) {
                toast.success('Your Contact uploaded')
                reset();
                refetch();
            }
        }

    }
    return (
        <div className="bg-[#fff] lg:px-[200px] xl:px-[300px] 2xl:px-[500px] pt-16 pb-0 lg:py-16">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="p-10 border rounded-md shadow-2xl bg-white">
                <form onSubmit={handleSubmit(onSubmit)} className="font-medium">
                    <h3 className="text-center text-xl xl:text-4xl font-semibold pb-4">Create New Contacts</h3>
                    <hr />
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                        <div className="flex-1 w-full">
                            <label className="label w-full flex items-center gap-2 text-gray-600">
                                Your Full Name
                                <span className="text-red-700">*</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Enter Your Name" className="w-full py-1 px-5 border text-sm border-[#1655EF] focus:outline-[#1655EF] mt-2" />
                            {errors.name?.type === "required" && <span className="text-red-600">Please Provide Your Name</span>}
                        </div>
                        <div className="flex-1 w-full">
                            <label className="label w-full flex items-center gap-2 text-gray-600">
                                Your E-mail Address
                                <span className="text-red-700">*</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Enter Your E-mail" className="w-full py-1 px-5 border text-sm border-[#1655EF] focus:outline-[#1655EF] mt-2" />
                            {errors.email?.type === "required" && <span className="text-red-600">Please Provide Your E-mail</span>}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                        <div className="flex-1 w-full">
                            <label className="label w-full flex items-center gap-2 text-gray-600">
                                Your Phone Number
                                <span className="text-red-700">*</span>
                            </label>
                            <input type="number" {...register("phone", { required: true })} placeholder="Enter Your Phone Number" className="w-full py-1 px-5 border text-sm border-[#1655EF] focus:outline-[#1655EF] mt-2" />
                            {errors.phone?.type === "required" && <span className="text-red-600">Please Provide Your Phone Number</span>}
                        </div>
                        <div className="flex-1 w-full">
                            <label className="label w-full flex items-center gap-2 text-gray-600">
                                Your Current Address
                                <span className="text-red-700">*</span>
                            </label>
                            <input type="text" {...register("address", { required: true })} placeholder="Enter Your Address" className="w-full py-1 px-5 border text-sm border-[#1655EF] focus:outline-[#1655EF] mt-2" />
                            {errors.address?.type === "required" && <span className="text-red-600">Please Provide Your Address</span>}
                        </div>
                    </div>
                    <div className="mt-4 w-full">
                        <div className="w-1/2 pr-3">
                            <label className="label w-full flex items-center gap-2 text-gray-600">
                                Your Photo
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
                                <VisuallyHiddenInput type="file" {...register("photo", { required: true })} />
                            </Button>
                            {errors.photo?.type === "required" && <span className="text-red-600">Please Provide Your Photo</span>}
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button type="submit" className="bg-[#fff] text-gray-600 font-semibold border-2 border-[#1655EF] py-2 px-5 rounded-md hover:border-2 hover:bg-[#1655EF] hover:text-white duration-500">Add Contacts</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddContacts;