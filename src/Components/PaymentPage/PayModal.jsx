import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const PayModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        className='w-full text-lg font-semibold p-2'
      >
        Book Tickets
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='p-3'>
          <h1 className=' font-bold text-2xl lg:text-4xl text-center'>Thanks  For The Order</h1>
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar parturient vel et odio. Est urna, sit curabitur cras -d adipiscing consequat. Urna tortor congue commodo ultricies tellus fermentum, nibh ali
            Vulputate morbi magna interdum vitae. Aliquet sit aenean tortor eget risus. Nisl, dictum egestas convallis commodo, scelerisque sed ullamcorper. At semper orci nisl felis platea. Tellus donec vitae placerat malesuada habitasse. Tortor tempor sagittis, cursus tortor. Habitant dapibus ac feugiat dignissim eu tellus, tincidunt. Dolor duis urna, nunc massa sed proin risus sed. Amet commodo volutpat amet nunc lectus nisi, at. Adipiscing condimentum in nulla velit urna justo, non duis. Nibh sed eget sed adipiscing nunc, ut auctor nullam. Elit ipsum, leo aliquet mauris elementum est. Commodo eget sagittis id eu, tellus in at.
            A tempor arcu, diam id vulputate orci, lobortis. Est enim massa egestas vel id nisl gravida. Sed sed urna, non sit. Scelerisque lacus eu, faucibus sed proin cursus. Interdum vulputate nullam etiam maecenas urna, cursus. Iaculis.</p>
        </div>
      </Modal>
    </>
  );
};
export default PayModal;