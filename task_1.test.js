const reverseString = require('./task/task_01');

test('task_01_test',
() => {
    expect(reverseString('hello www')).toBe('www olleh');
});