// const AccountSettings = () => {
    
//   return (
//     <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10">
//       <div className="py-2">
//         <div className="px-4 py-2 text-sm font-medium">My Account</div>
//         <hr className="border-t my-1" />
//         <button className="w-full text-left px-4 py-2 text-sm">Profile</button>
//         <button className="w-full text-left px-4 py-2 text-sm">Orders</button>
//         <button className="w-full text-left px-4 py-2 text-sm">Settings</button>
//         <hr className="border-t my-1" />
//         <button className="w-full text-left px-4 py-2 text-sm">Logout</button>
//       </div>
//     </div>
//   );
// };

// export default AccountSettings;


const AccountSettings = () => {
  return (
    <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 md:w-56 sm:w-full sm:left-0">
      <div className="py-2">
        <div className="px-4 py-2 text-sm font-medium">My Account</div>
        <hr className="border-t my-1" />
        <button className="w-full text-left px-4 py-2 text-sm">Profile</button>
        <button className="w-full text-left px-4 py-2 text-sm">Orders</button>
        <button className="w-full text-left px-4 py-2 text-sm">Settings</button>
        <hr className="border-t my-1" />
        <button className="w-full text-left px-4 py-2 text-sm">Logout</button>
      </div>
    </div>
  );
};

export default AccountSettings;

