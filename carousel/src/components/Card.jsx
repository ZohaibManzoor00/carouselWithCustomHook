function Card(item) {
  return (
    <>
      <img src={item.imgUrl} height="400px" width="500px" />
      <div style={{ fontSize: '25px', display: 'flex', justifyContent: 'center', margin: '20px' }}>{item.title}</div>
    </>
  );
}

export default Card