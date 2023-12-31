import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import BookingTable from "./BookingTable";
import useAcceptedBookings from "../../../../hooks/useAcceptedBookings";


const BookRequest = () => {
  // const axiosSecure = useAxiosSecure()
  const { user } = useAuth()
  const email = user?.email
  // const { data } = useQuery({
  //   queryKey: ["bookingRequest", email],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/bookingRequest/${email}`)
  //     return res.data
  //   }
  // })
  const bookings= useAcceptedBookings()
  console.log("dasfcasdfcasf",bookings);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>House No.</th>
            <th>Floor</th>
            <th>Category</th>
            <th>Type</th>
            <th>Rent</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map((item, idx) => <BookingTable key={idx} bookings={item} index={idx}></BookingTable>)}
        </tbody>
      </table>
    </div>
  );
};

export default BookRequest;