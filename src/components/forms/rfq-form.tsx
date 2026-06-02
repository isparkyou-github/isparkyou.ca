"use client";

import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

import {
  submitRfq,
  type RfqActionState,
} from "@/app/actions/submit-rfq";

type RfqFormProps = {
  demoMode: boolean;
};

const initialRfqActionState: RfqActionState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#0758ff] px-6 py-3 text-sm font-bold tracking-wide text-white shadow-[0_10px_24px_rgba(7,88,255,0.2)] hover:-translate-y-0.5 hover:bg-[#064ce0] disabled:cursor-wait disabled:opacity-70"
      disabled={pending}
      type="submit"
    >
      {pending ? (
        <>
          <LoaderCircle aria-hidden="true" className="animate-spin" size={17} />
          Submitting...
        </>
      ) : (
        <>
          <Send aria-hidden="true" size={16} />
          Submit RFQ
        </>
      )}
    </button>
  );
}

function FieldError({
  errors,
  name,
}: {
  errors?: RfqActionState["errors"];
  name: string;
}) {
  const message = errors?.[name]?.[0];

  return message ? <span className="field-error">{message}</span> : null;
}

export function RfqForm({ demoMode }: RfqFormProps) {
  const [state, formAction] = useActionState(
    submitRfq,
    initialRfqActionState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      action={formAction}
      className="rounded-sm border border-[#d1deec] bg-white p-5 shadow-[0_18px_45px_rgba(9,37,111,0.08)] sm:p-7"
      ref={formRef}
    >
      {demoMode ? (
        <p className="mb-6 border-l-2 border-[#0758ff] bg-[#f5f9ff] px-4 py-3 text-sm leading-6 text-[#31415f]">
          Local preview mode: submissions are simulated and no information is
          sent or saved.
        </p>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2">
        <label>
          <span className="field-label">Company name *</span>
          <input className="field-control" name="companyName" required />
          <FieldError errors={state.errors} name="companyName" />
        </label>
        <label>
          <span className="field-label">Contact name *</span>
          <input className="field-control" name="contactName" required />
          <FieldError errors={state.errors} name="contactName" />
        </label>
        <label>
          <span className="field-label">Business email *</span>
          <input className="field-control" name="businessEmail" required type="email" />
          <FieldError errors={state.errors} name="businessEmail" />
        </label>
        <label>
          <span className="field-label">Phone</span>
          <input className="field-control" name="phone" type="tel" />
          <FieldError errors={state.errors} name="phone" />
        </label>
        <label>
          <span className="field-label">Project location *</span>
          <input
            className="field-control"
            name="projectLocation"
            placeholder="City, province/state"
            required
          />
          <FieldError errors={state.errors} name="projectLocation" />
        </label>
        <label>
          <span className="field-label">Project stage *</span>
          <select className="field-control" defaultValue="" name="projectStage" required>
            <option disabled value="">
              Select a stage
            </option>
            <option>Budget</option>
            <option>Tender</option>
            <option>Awarded</option>
            <option>Construction</option>
            <option>Retrofit</option>
          </select>
          <FieldError errors={state.errors} name="projectStage" />
        </label>
        <label>
          <span className="field-label">Equipment category *</span>
          <select
            className="field-control"
            defaultValue=""
            name="equipmentCategory"
            required
          >
            <option disabled value="">
              Select equipment
            </option>
            <option>Low-voltage control panel</option>
            <option>PLC control enclosure</option>
            <option>Relay or terminal junction box</option>
            <option>Energy monitoring or smart metering</option>
            <option>Communication gateway</option>
            <option>Other electrical equipment</option>
          </select>
          <FieldError errors={state.errors} name="equipmentCategory" />
        </label>
        <label>
          <span className="field-label">Quantity *</span>
          <input className="field-control" min="1" name="quantity" required type="number" />
          <FieldError errors={state.errors} name="quantity" />
        </label>
        <label>
          <span className="field-label">Voltage level *</span>
          <input
            className="field-control"
            name="voltageLevel"
            placeholder="Example: 600 VAC / 24 VDC control"
            required
          />
          <FieldError errors={state.errors} name="voltageLevel" />
        </label>
        <label>
          <span className="field-label">Certification requirement *</span>
          <select
            className="field-control"
            defaultValue=""
            name="certificationRequirement"
            required
          >
            <option disabled value="">
              Select requirement
            </option>
            <option>CSA / cUL / cETL</option>
            <option>UL / NRTL</option>
            <option>Field evaluation</option>
            <option>Customer specification provided</option>
            <option>To be confirmed</option>
          </select>
          <FieldError errors={state.errors} name="certificationRequirement" />
        </label>
        <label>
          <span className="field-label">Target delivery date *</span>
          <input className="field-control" name="targetDeliveryDate" required type="date" />
          <FieldError errors={state.errors} name="targetDeliveryDate" />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="field-label">Project details *</span>
        <textarea
          className="field-control min-h-32 resize-y"
          name="projectDetails"
          placeholder="Describe equipment requirements, available drawings, documentation needs, installation environment, and known project constraints."
          required
        />
        <FieldError errors={state.errors} name="projectDetails" />
      </label>
      <label className="sr-only" aria-hidden="true">
        Leave this field blank
        <input autoComplete="off" name="_gotcha" tabIndex={-1} />
      </label>
      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-[#59657c]">
        <input
          className="mt-1 h-4 w-4 accent-[#0758ff]"
          name="consent"
          required
          type="checkbox"
        />
        <span>
          I agree that iSparkYou may use this information to review and respond
          to this RFQ.
          <FieldError errors={state.errors} name="consent" />
        </span>
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SubmitButton />
        <p className="max-w-md text-xs leading-5 text-[#68758d]">
          Final product and installation approval remain subject to applicable
          certification bodies, contractors, engineer of record, and AHJ.
        </p>
      </div>
      {state.message ? (
        <p
          className={`mt-5 flex items-start gap-2 rounded-sm border px-4 py-3 text-sm leading-6 ${
            state.status === "success"
              ? "border-[#a6ddbd] bg-[#f0fbf4] text-[#19633b]"
              : "border-[#f1b8b3] bg-[#fff4f2] text-[#9f2d24]"
          }`}
          role="status"
        >
          {state.status === "success" ? (
            <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0" size={17} />
          ) : null}
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
