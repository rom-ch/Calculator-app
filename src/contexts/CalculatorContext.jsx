import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  previousOperand: null,
  operation: null,
  currentOperand: "0",
};

const ACTIONS = {
  ADD_DIGIT: "ADD_DIGIT",
  RESET: "RESET",
  DELETE_DIGIT: "DELETE_DIGIT",
  CHOOSE_OPERATION: "CHOOSE_OPERATION",
  RESULT: "RESULT",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite === true) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;
      if (state.currentOperand === "0" && payload.digit === "0") return state;
      return {
        ...state,
        currentOperand:
          state.currentOperand === "0" && payload.digit !== "."
            ? payload.digit
            : state.currentOperand + payload.digit,
      };
    case ACTIONS.DELETE_DIGIT:
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: "0",
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.RESET:
      return INITIAL_STATE;
    case ACTIONS.CHOOSE_OPERATION:
      if (state.previousOperand == null) {
        return {
          ...state,
          previousOperand: state.currentOperand,
          operation: payload.operation,
          currentOperand: "0",
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: "0",
      };

    case ACTIONS.RESULT:
      if (
        state.previousOperand == null ||
        state.operation == null ||
        state.currentOperand === "0"
      )
        return state;
      return {
        ...state,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
        overwrite: true,
      };

    default:
      return state;
  }
}

function evaluate({ previousOperand, operation, currentOperand }) {
  const previous = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(previous) || isNaN(current)) return "";
  let computation;

  switch (operation) {
    case "+":
      computation = previous + current;
      break;
    case "-":
      computation = previous - current;
      break;
    case "x":
      computation = previous * current;
      break;
    case "/":
      computation = previous / current;
      break;
  }

  return computation.toString();
}

export const CalculatorContext = createContext();

export function CalculatorProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  function addDigit(digit) {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
  }

  function reset() {
    dispatch({ type: ACTIONS.RESET });
  }

  function deleteDigit() {
    dispatch({ type: ACTIONS.DELETE_DIGIT });
  }

  function chooseOperation(operation) {
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
  }

  function result() {
    dispatch({ type: ACTIONS.RESULT });
  }

  return (
    <CalculatorContext.Provider
      value={{ state, addDigit, deleteDigit, reset, chooseOperation, result }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}
