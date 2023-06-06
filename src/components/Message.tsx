let count = 0;
function Message() {
  console.log("Message Called", count);

  count++;
  return <div>The Count value : {count}</div>;
}
export default Message;
