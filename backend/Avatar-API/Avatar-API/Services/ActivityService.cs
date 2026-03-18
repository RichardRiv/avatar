using Avatar_API.Models;

namespace Avatar_API.Services;

public class ActivityService
{
    private MediaActivity? _current;
    private readonly List<Func<MediaActivity?, Task>> _listeners = new();
    private readonly Lock _lock = new();
    
    public MediaActivity? GetCurrent() => _current;

    public async Task UpdateAsync(MediaActivity? activity)
    {
        List<Func<MediaActivity?, Task>> snapshot;

        lock (_lock)
        {
            if (activity != null && _current != null)
            {
                if(string.IsNullOrEmpty(activity.AlbumArt)) activity.AlbumArt = _current.AlbumArt;
            }
            _current = activity;
            snapshot = _listeners.ToList();
        }

        foreach (var listener in snapshot)
        {
            try{ await listener(activity); }
            catch{ /* client disconnected */ }
        }
    }

    public void Subscribe(Func<MediaActivity?, Task> listener)
    {
        lock (_lock) _listeners.Add(listener);
    }

    public void Unsubscribe(Func<MediaActivity?, Task> listener)
    {
        lock (_lock) _listeners.Remove(listener);
    }
}