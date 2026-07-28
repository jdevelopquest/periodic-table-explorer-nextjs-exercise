export default function SearchOptions({
  options,
}: {
  options: { [key: string]: string[] };
}) {
  return (
    <div>
      {Object.entries(options).map(([key, values]) =>
        values.map((value) => (
          <label key={`${key}-${value}`} htmlFor={`${key}-${value}`}>
            <input
              type="checkbox"
              name={key}
              value={value}
              defaultChecked
              id={`${key}-${value}`}
            />
            <span>{value}</span>
          </label>
        )),
      )}
    </div>
  );
}
