import React, { useState } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "./strictModeDroppable";
import data from "../../data";
import Card from "../card/index";

const Kanban = () => {
  const [kanbanData, setkanbanData] = useState(data);

  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;
    const sourceColIndex = kanbanData.findIndex(
      (e) => e.id === source.droppableId
    );
    const destinationColIndex = kanbanData.findIndex(
      (e) => e.id === destination.droppableId
    );

    const sourceCol = kanbanData[sourceColIndex];
    const destinationCol = kanbanData[destinationColIndex];

    const sourceTasks = [...sourceCol.data];
    const destinationTasks = [...destinationCol.data];

    if (source.droppableId !== destination.droppableId) {
      const [removed] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, removed);
      kanbanData[sourceColIndex].data = sourceTasks;
      kanbanData[destinationColIndex].data = destinationTasks;
    } else {
      const [removed] = destinationTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, removed);
      kanbanData[destinationColIndex].cards = destinationTasks;
    }

    setkanbanData(kanbanData);
  };

  return (
    <div className="main_app">
      <p className="board_txt">Board</p>
      <DragDropContext onDragEnd={onDragEnd}>
        <main className="card_main" style={{ paddingBottom: "19px" }}>
          {kanbanData?.map((data) => {
            return (
              <StrictModeDroppable key={data.id} droppableId={data.id}>
                {(provided, snapshot) => {
                  return (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      <div
                        className={
                          snapshot.isDraggingOver
                            ? "card_container_drag"
                            : "card_container"
                        }
                      >
                        <div className="card_head">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <span className="card_head_txt">
                                {data.title}
                              </span>
                            </div>
                            <div>
                              <button className="card_total_txt">
                                Total : {data.data.length}
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="card_items">
                          {data.data?.map((carddata, index) => {
                            return (
                              <Draggable
                                key={carddata._id}
                                draggableId={carddata._id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <div
                                        className={
                                          snapshot.draggingOver
                                            ? "item_drag"
                                            : carddata.priority === "High"
                                            ? "item item_high"
                                            : carddata.priority === "Meduim"
                                            ? "item item_medium"
                                            : carddata.priority === "Low"
                                            ? "item item_low"
                                            : "item"
                                        }
                                      >
                                        <Card data={carddata} />
                                      </div>
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                        </div>
                      </div>
                      {provided.placeholder}
                    </div>
                  );
                }}
              </StrictModeDroppable>
            );
          })}
        </main>
      </DragDropContext>
    </div>
  );
};

export default Kanban;
